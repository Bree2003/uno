import {
  EndpointName,
  EndpointStatus,
  UploadStateModel,
} from "controllers/Ingest/PreviewController"; // Ojo con la ruta si cambiaste nombres
import Loading from "components/Global/Loading/Loading";

interface Props {
  model: Partial<UploadStateModel> | undefined;
  endpoints: Partial<Record<EndpointName, EndpointStatus>> | undefined;
  onBack: () => void;
}

const PreviewScreen = ({ model, endpoints, onBack }: Props) => {
  const isLoading = endpoints?.GetLatestDataset?.loading;
  const file = model?.currentFile;

  return (
    <div className="p-10">
      <button
        onClick={onBack}
        className="mb-6 text-sm text-blue-600 hover:underline flex items-center"
      >
        ← Volver a Tablas
      </button>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Vista Previa de Datos
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-gray-500 text-sm">Archivo actual:</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-blue-200">
            {file?.fileName || "Buscando..."}
          </span>
        </div>

        {/* Migas de pan */}
        <div className="flex flex-wrap gap-2 mt-3 text-xs font-mono opacity-70">
          <span>{model?.envId}</span> / <span>{model?.bucketName}</span> /{" "}
          <span>{model?.productName}</span> /{" "}
          <span className="font-bold">{model?.tableName}</span>
        </div>
      </div>

      {isLoading ? (
        <Loading message="Cargando vista previa..." />
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          {/* CASO 1: No hay archivo (Vacío) */}
          {file?.isEmpty ? (
            <div className="p-10 text-center text-gray-500">
              <p className="text-lg font-medium">
                No se encontró un archivo dataset previo.
              </p>
              <p className="text-sm mt-2 text-gray-400">
                Esta tabla está lista para su primera carga.
              </p>
            </div>
          ) : (
            // CASO 2: Hay datos -> GRILLA DINÁMICA
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                <thead className="bg-gray-50 text-gray-500 font-medium">
                  <tr>
                    <th className="px-6 py-3 w-10 font-bold text-gray-400">
                      #
                    </th>
                    {file?.headers?.map((header, idx) => (
                      <th
                        key={idx}
                        className="px-6 py-3 whitespace-nowrap uppercase tracking-wider font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {file?.rows?.map((row, rowIdx) => (
                    <tr
                      key={rowIdx}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                        {rowIdx + 1}
                      </td>
                      {file.headers.map((col, colIdx) => (
                        <td
                          key={`${rowIdx}-${colIdx}`}
                          className="px-6 py-4 whitespace-nowrap text-gray-700"
                        >
                          {/* Renderizamos el valor de la celda dinámicamente */}
                          {row[col]?.toString() || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Footer informativo */}
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 text-xs text-gray-500">
                Mostrando los primeros {file?.rows?.length} registros del
                archivo.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PreviewScreen;
