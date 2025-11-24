import {
  EndpointName,
  EndpointStatus,
  FolderStateModel,
  UploadState,
} from "controllers/Ingest/FolderListController";
import Loading from "components/Global/Loading/Loading";

interface Props {
  model: Partial<FolderStateModel> | undefined;
  endpoints: Partial<Record<EndpointName, EndpointStatus>> | undefined;
  uploadState: UploadState;
  onSelectTable: (tableName: string) => void;
  onBack: () => void;
  // Props del Formulario
  onToggleModal: (isOpen: boolean) => void;
  onFileChange: (file: File | null) => void;
  onTableChange: (tableId: string) => void;
  onUpload: () => void;
}

const FolderListScreen = ({
  model,
  endpoints,
  uploadState,
  onSelectTable,
  onBack,
  onToggleModal,
  onFileChange,
  onTableChange,
  onUpload,
}: Props) => {
  const isLoadingFolders = endpoints?.GetFolders?.loading;

  return (
    <div className="p-10 relative min-h-screen">
      {/* Header y Botones */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <button
            onClick={onBack}
            className="mb-2 text-sm text-blue-600 hover:underline flex items-center"
          >
            ← Volver a Productos
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            Tablas de{" "}
            <span className="text-blue-600">{model?.productName}</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1 font-mono">
            {model?.envId} / {model?.bucketName}
          </p>
        </div>

        {/* Botón Principal para abrir el Form */}
        <button
          onClick={() => onToggleModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow flex items-center gap-2 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          Subir Archivo
        </button>
      </div>

      {/* Lista de Carpetas (Tablas) */}
      {isLoadingFolders ? (
        <Loading message="Buscando tablas..." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {model?.tables?.map((table) => (
            <div
              key={table.id}
              className="group p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-300 cursor-pointer transition-all"
              onClick={() => onSelectTable(table.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 group-hover:text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M3 14h18m-9-4v8m-7-4h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span
                    className="font-medium text-gray-700 truncate group-hover:text-indigo-700"
                    title={table.label}
                  >
                    {table.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* --- MINI FORM (MODAL) --- */}
      {uploadState.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
            {/* Cerrar */}
            <button
              onClick={() => onToggleModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Ingestar Archivo
            </h2>

            {!uploadState.uploadSuccess ? (
              <div className="space-y-4">
                {/* 1. Selector de Tabla Destino */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tabla Destino
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    value={uploadState.selectedTable}
                    onChange={(e) => onTableChange(e.target.value)}
                    disabled={uploadState.isUploading}
                  >
                    <option value="">-- Selecciona una tabla --</option>
                    {model?.tables?.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Input de Archivo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Archivo
                  </label>
                  <input
                    type="file"
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    onChange={(e) =>
                      e.target.files && onFileChange(e.target.files[0])
                    }
                    disabled={uploadState.isUploading}
                  />
                </div>

                {/* Barra de Progreso */}
                {uploadState.isUploading && (
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${uploadState.progress}%` }}
                    ></div>
                    <p className="text-xs text-center mt-1 text-gray-500">
                      {uploadState.progress}%
                    </p>
                  </div>
                )}

                {/* Botón Acción */}
                <button
                  onClick={onUpload}
                  disabled={
                    !uploadState.file ||
                    !uploadState.selectedTable ||
                    uploadState.isUploading
                  }
                  className={`w-full py-2 rounded-lg font-semibold text-white mt-2
                                ${
                                  !uploadState.file ||
                                  !uploadState.selectedTable
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "bg-green-600 hover:bg-green-700 shadow-md"
                                }`}
                >
                  {uploadState.isUploading ? "Subiendo..." : "Comenzar Ingesta"}
                </button>
              </div>
            ) : (
              // Estado de Éxito
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  ¡Archivo Cargado!
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  El archivo se ha subido correctamente a GCS.
                </p>
                <button
                  onClick={() => onToggleModal(false)}
                  className="mt-6 text-blue-600 hover:underline text-sm"
                >
                  Cerrar ventana
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderListScreen;
