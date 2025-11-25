import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FolderAdapter, { FolderModel } from "models/Ingest/folder-model";
import {
  getFoldersService,
  initiateUploadService,
  uploadFileDirectlyService,
  uploadSmallFileService,
  analyzeFileService,
} from "services/Ingest/folder-service";
import FolderListScreen from "screens/Ingest/FolderListScreen";

export interface EndpointStatus {
  loading?: boolean;
  error?: boolean;
}

export type EndpointName = "GetFolders" | "UploadFile";

export interface FolderStateModel {
  tables: FolderModel[];
  envId: string;
  bucketName: string;
  productName: string;
}

export interface UploadState {
  // Formulario inicial
  selectedTable: string;
  file: File | null;

  // Wizard
  isWizardOpen: boolean;
  currentStep: number;
  stepData: any;
  isLoadingAnalysis: boolean;
  analysisProgress: number; // Progreso de la subida al analizar

  // Subida Final
  isUploading: boolean;
  uploadProgress: number;
  uploadSuccess: boolean;
}

const initialUploadState: UploadState = {
  selectedTable: "",
  file: null,
  isWizardOpen: false,
  currentStep: 1,
  stepData: null,
  isLoadingAnalysis: false,
  analysisProgress: 0,
  isUploading: false,
  uploadProgress: 0,
  uploadSuccess: false,
};

const FolderListController = () => {
  const { envId, bucketName, productName } = useParams();
  const navigate = useNavigate();

  const [model, setModel] = useState<Partial<FolderStateModel>>({
    tables: [],
    envId,
    bucketName,
    productName,
  });

  const [uploadState, setUploadState] =
    useState<UploadState>(initialUploadState);
  const [endpoints, setEndpoints] =
    useState<Partial<Record<EndpointName, EndpointStatus>>>();

  useEffect(() => {
    if (envId && bucketName && productName) {
      loadFolders();
    }
  }, [envId, bucketName, productName]);

  // --- HELPERS ---
  const setEndpointStatus = (
    name: EndpointName,
    status: Partial<EndpointStatus>
  ) => {
    setEndpoints((prev) => ({
      ...prev,
      [name]: { ...prev?.[name], ...status },
    }));
  };

  const updateModel = (data: Partial<FolderStateModel>) => {
    setModel((prev) => ({ ...prev, ...data }));
  };

  const loadFolders = async () => {
    if (!envId || !bucketName || !productName) return;
    setEndpointStatus("GetFolders", { loading: true, error: false });
    try {
      const response = await getFoldersService(envId, bucketName, productName);
      const cleanTables = FolderAdapter(response);
      updateModel({ tables: cleanTables });
    } catch (e) {
      console.error(e);
      setEndpointStatus("GetFolders", { error: true });
    } finally {
      setEndpointStatus("GetFolders", { loading: false });
    }
  };

  const handleSelectTableForPreview = (tableName: string) => {
    navigate(
      `/dashboard/${envId}/${bucketName}/${productName}/${tableName}/preview`
    );
  };

  const handleBack = () => navigate(-1);

  // --- FORMULARIO Y WIZARD ---

  const handleFileChange = (file: File | null) =>
    setUploadState((p) => ({ ...p, file }));
  const handleTableChange = (tableId: string) =>
    setUploadState((p) => ({ ...p, selectedTable: tableId }));

  // 1. Abrir Wizard
  const handleStartWizard = () => {
    if (uploadState.file && uploadState.selectedTable) {
      setUploadState((p) => ({
        ...p,
        isWizardOpen: true,
        currentStep: 1,
        uploadSuccess: false,
        stepData: null,
      }));
      loadStepData(1);
    }
  };

  const handleCloseWizard = () => {
    setUploadState(initialUploadState);
  };

  // 2. Cargar datos del paso (Llama a /analyze)
  const loadStepData = async (step: number) => {
    const { file } = uploadState;
    if (!file) return;

    setUploadState((p) => ({
      ...p,
      isLoadingAnalysis: true,
      analysisProgress: 0,
    }));

    try {
      // Enviamos callback de progreso para la subida del archivo al analizar
      const response = await analyzeFileService(file, step, (pct) => {
        setUploadState((p) => ({ ...p, analysisProgress: pct }));
      });

      if (response.status === 200) {
        // Inyectamos metadatos extra en el paso 1 para que Step1Confirmation tenga todo
        let data = response.data;
        if (step === 1) {
          data = {
            ...data,
            producto_dato: productName,
            dataset_destino: uploadState.selectedTable, // Usamos el ID de la tabla como nombre dataset
            usuario: "Usuario", // Puedes sacar esto del sessionStorage si quieres
          };
        }

        setUploadState((p) => ({
          ...p,
          stepData: data,
          currentStep: step,
          isLoadingAnalysis: false,
        }));
      } else {
        console.error("Error análisis", response);
        setUploadState((p) => ({ ...p, isLoadingAnalysis: false }));
      }
    } catch (e) {
      console.error(e);
      setUploadState((p) => ({ ...p, isLoadingAnalysis: false }));
    }
  };

  const handleNextStep = () => {
    const next = uploadState.currentStep + 1;
    loadStepData(next);
  };

  const handlePrevStep = () => {
    const prev = uploadState.currentStep - 1;
    loadStepData(prev);
  };

  // 3. Subida Final (Optimized Upload)
  const handleFinalUpload = async () => {
    const { file, selectedTable } = uploadState;
    if (!file || !selectedTable || !envId || !bucketName || !productName)
      return;

    setUploadState((p) => ({ ...p, isUploading: true, uploadProgress: 0 }));

    const SIZE_LIMIT = 300 * 1024 * 1024;
    const destinationPath = `${productName}/${selectedTable}`;

    try {
      if (file.size < SIZE_LIMIT) {
        await uploadSmallFileService(
          envId,
          bucketName,
          destinationPath,
          file,
          (pct) => setUploadState((p) => ({ ...p, uploadProgress: pct }))
        );
      } else {
        const initRes = await initiateUploadService(
          envId,
          bucketName,
          destinationPath,
          file.name
        );
        await uploadFileDirectlyService(initRes.sessionUrl, file, (pct) =>
          setUploadState((p) => ({ ...p, uploadProgress: pct }))
        );
      }
      setUploadState((p) => ({
        ...p,
        isUploading: false,
        uploadSuccess: true,
      }));
    } catch (e) {
      console.error(e);
      setUploadState((p) => ({ ...p, isUploading: false }));
    }
  };

  return (
    <FolderListScreen
      model={model}
      endpoints={endpoints}
      uploadState={uploadState}
      onSelectTable={handleSelectTableForPreview}
      onBack={handleBack}
      // Props del Form
      onFileChange={handleFileChange}
      onTableChange={handleTableChange}
      onStartWizard={handleStartWizard} // <--- Conectado
      // Props del Wizard
      onCloseWizard={handleCloseWizard}
      onNextStep={handleNextStep}
      onPrevStep={handlePrevStep}
      onFinalUpload={handleFinalUpload}
    />
  );
};

export default FolderListController;
