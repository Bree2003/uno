import { UploadState } from "controllers/Ingest/FolderListController";

interface Table {
  id: string;
  label: string;
}

interface FileUploadSectionProps {
  tables: Table[];
  uploadState: UploadState;
  onFileChange: (file: File | null) => void;
  onTableChange: (tableId: string) => void;
  onAction: () => void; // <--- Cambiado de onUpload a onAction
}

export default function FileUploadSection({
  tables,
  uploadState,
  onFileChange,
  onTableChange,
  onAction,
}: FileUploadSectionProps) {
  // Nota: Quitamos la pantalla de éxito de aquí, porque ahora el éxito lo maneja el Modal.

  return (
    <div className="border-t mt-8 pt-8">
      <h2 className="font-bold text-left text-2xl mb-6 text-gray-800">
        Nueva Ingesta
      </h2>

      <div className="space-y-6 max-w-2xl">
        {/* 1. Selector */}
        <div className="flex items-center">
          <label className="w-40 shrink-0 text-gray-700 font-medium">
            Tabla Destino
          </label>
          <select
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm py-2"
            value={uploadState.selectedTable}
            onChange={(e) => onTableChange(e.target.value)}
          >
            <option value="">-- Selecciona una tabla --</option>
            {tables.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {/* 2. Input Archivo */}
        <div className="flex items-center">
          <label className="w-40 shrink-0 text-gray-700 font-medium">
            Cargar archivo
          </label>
          <input
            type="file"
            accept=".csv, .xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, text/csv"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-[#F46546] hover:file:bg-orange-100 cursor-pointer"
            onChange={(e) => e.target.files && onFileChange(e.target.files[0])}
          />
        </div>

        {/* 3. Botón */}
        <div className="flex justify-start pl-40 pt-2">
          <button
            onClick={onAction}
            disabled={!uploadState.file || !uploadState.selectedTable}
            className="rounded-md bg-[#F46546] py-2.5 px-8 text-sm font-bold text-white shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
          >
            Analizar e Ingestar
          </button>
        </div>
      </div>
    </div>
  );
}
