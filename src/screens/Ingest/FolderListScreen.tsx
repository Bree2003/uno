import {
  EndpointName,
  EndpointStatus,
  FolderStateModel,
  UploadState,
} from "controllers/Ingest/FolderListController";
import ResumenProducto from "components/ResumenProducto/ResumenProducto";
import ProductSidebar from "components/DataProduct/ProductSidebar";
import FileUploadSection from "components/DataProduct/FileUploadSection";
import WizardModal from "components/Ingest/Wizard/WizardModal";

interface Props {
  model: Partial<FolderStateModel> | undefined;
  endpoints: Partial<Record<EndpointName, EndpointStatus>> | undefined;
  uploadState: UploadState;
  onSelectTable: (tableName: string) => void;
  onBack: () => void;

  // Form
  onFileChange: (file: File | null) => void;
  onTableChange: (tableId: string) => void;
  onStartWizard: () => void; // <--- Nuevo botón principal

  // Wizard Actions
  onCloseWizard: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onFinalUpload: () => void;
}

const FolderListScreen = ({
  model,
  endpoints,
  uploadState,
  onSelectTable,
  onBack,
  onFileChange,
  onTableChange,
  onStartWizard,
  onCloseWizard,
  onNextStep,
  onPrevStep,
  onFinalUpload,
}: Props) => {
  const isLoadingFolders = endpoints?.GetFolders?.loading;

  return (
    <div className="flex w-full h-full bg-white">
      {/* 1. Menú Lateral */}
      <ProductSidebar
        productName={model?.productName}
        tables={model?.tables || []}
        loading={isLoadingFolders}
        onSelectTable={onSelectTable}
      />

      {/* 2. Contenido Principal */}
      <main className="flex flex-grow flex-col p-10 w-full h-screen overflow-y-auto">
        {model?.productName && (
          <ResumenProducto productName={model.productName} />
        )}

        {/* Sección de Selección de Archivo */}
        <FileUploadSection
          tables={model?.tables || []}
          uploadState={uploadState}
          onFileChange={onFileChange}
          onTableChange={onTableChange}
          onAction={onStartWizard} // <--- El botón "Analizar e Ingestar" llama aquí
        />

        {/* MODAL WIZARD */}
        <WizardModal
          isOpen={uploadState.isWizardOpen}
          currentStep={uploadState.currentStep}
          stepData={uploadState.stepData}
          isLoading={uploadState.isLoadingAnalysis}
          isUploading={uploadState.isUploading}
          uploadProgress={uploadState.uploadProgress}
          uploadSuccess={uploadState.uploadSuccess}
          onClose={onCloseWizard}
          onNext={onNextStep}
          onPrevious={onPrevStep}
          onFinalUpload={onFinalUpload}
        />
      </main>
    </div>
  );
};

export default FolderListScreen;
