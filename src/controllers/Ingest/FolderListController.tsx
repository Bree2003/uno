import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import FolderAdapter, { FolderModel } from "models/Ingest/folder-model";
import {
  getFoldersService,
  initiateUploadService,
  uploadFileDirectlyService,
  uploadSmallFileService,
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

// Estado para el formulario de subida
export interface UploadState {
  isOpen: boolean; // Si el modal está abierto
  selectedTable: string; // ID de la tabla destino
  file: File | null; // Archivo seleccionado
  progress: number; // 0 a 100
  isUploading: boolean;
  uploadSuccess: boolean;
}

const FolderListController = () => {
  const { envId, bucketName, productName } = useParams();
  const navigate = useNavigate();

  // Estado principal de datos
  const [model, setModel] = useState<Partial<FolderStateModel>>({
    tables: [],
    envId,
    bucketName,
    productName,
  });

  // Estado del formulario de upload
  const [uploadState, setUploadState] = useState<UploadState>({
    isOpen: false,
    selectedTable: "",
    file: null,
    progress: 0,
    isUploading: false,
    uploadSuccess: false,
  });

  const [endpoints, setEndpoints] =
    useState<Partial<Record<EndpointName, EndpointStatus>>>();

  useEffect(() => {
    if (envId && bucketName && productName) {
      loadFolders();
    }
  }, [envId, bucketName, productName]);

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
    // Navegación antigua para ver preview (si hacen click en la tarjeta)
    navigate(
      `/ingest/${envId}/${bucketName}/${productName}/${tableName}/preview`
    );
  };

  const handleBack = () => navigate(-1);

  // --- LÓGICA DEL FORMULARIO DE UPLOAD ---

  const toggleUploadModal = (isOpen: boolean) => {
    setUploadState((prev) => ({
      ...prev,
      isOpen,
      uploadSuccess: false,
      progress: 0,
      file: null,
    }));
  };

  const handleFileChange = (file: File | null) => {
    setUploadState((prev) => ({ ...prev, file }));
  };

  const handleTableChange = (tableId: string) => {
    setUploadState((prev) => ({ ...prev, selectedTable: tableId }));
  };

  const handleUpload = async () => {
    const { file, selectedTable } = uploadState;
    if (!file || !selectedTable || !envId || !bucketName || !productName)
      return;

    setUploadState((prev) => ({ ...prev, isUploading: true, progress: 0 }));
    setEndpointStatus("UploadFile", { loading: true, error: false });

    // 1. Definimos el límite: 300MB en Bytes
    const SIZE_LIMIT = 300 * 1024 * 1024;
    const destinationPath = `${productName}/${selectedTable}`;

    try {
      if (file.size < SIZE_LIMIT) {
        // --- OPCIÓN A: ARCHIVO PEQUEÑO (Backend -> Parquet) ---
        console.log("📂 Archivo < 300MB. Usando endpoint /upload (Backend)");

        // Como el backend procesa el archivo, no tendremos un progreso "real" de subida a GCS,
        // pero sí de subida al servidor. Simulamos un poco para UX.
        await uploadSmallFileService(
          envId,
          bucketName,
          destinationPath,
          file,
          (percent) =>
            setUploadState((prev) => ({ ...prev, progress: percent }))
        );
      } else {
        // --- OPCIÓN B: ARCHIVO GRANDE (Directo GCS -> Resumable) ---
        console.log(
          "📦 Archivo >= 300MB. Usando Resumable Upload (Directo GCS)"
        );

        const initResponse = await initiateUploadService(
          envId,
          bucketName,
          destinationPath,
          file.name
        );

        await uploadFileDirectlyService(
          initResponse.sessionUrl,
          file,
          (percent) =>
            setUploadState((prev) => ({ ...prev, progress: percent }))
        );
      }

      // Éxito común para ambos casos
      setUploadState((prev) => ({
        ...prev,
        isUploading: false,
        uploadSuccess: true,
      }));
      console.log("Subida exitosa!");
    } catch (error) {
      console.error("Error subiendo archivo", error);
      setUploadState((prev) => ({ ...prev, isUploading: false, progress: 0 }));
      setEndpointStatus("UploadFile", { error: true });
    } finally {
      setEndpointStatus("UploadFile", { loading: false });
    }
  };

  return (
    <FolderListScreen
      model={model}
      endpoints={endpoints}
      uploadState={uploadState} // Pasamos el estado del form
      onSelectTable={handleSelectTableForPreview}
      onBack={handleBack}
      // Handlers del form
      onToggleModal={toggleUploadModal}
      onFileChange={handleFileChange}
      onTableChange={handleTableChange}
      onUpload={handleUpload}
    />
  );
};

export default FolderListController;
