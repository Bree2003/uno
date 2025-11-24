import {
  EndpointName,
  EndpointStatus,
  BucketListModel,
} from "controllers/Ingest/BucketListController";
import Loading from "components/Global/Loading/Loading";

interface Props {
  model: Partial<BucketListModel> | undefined;
  endpoints: Partial<Record<EndpointName, EndpointStatus>> | undefined;
  onBack: () => void;
  // --- NUEVO: Definimos la prop ---
  onSelectBucket: (bucketName: string) => void;
}

const BucketListScreen = ({
  model,
  endpoints,
  onBack,
  onSelectBucket,
}: Props) => {
  const isLoading = endpoints?.GetBuckets?.loading;

  return (
    <div className="p-10">
      <button
        onClick={onBack}
        className="mb-4 text-sm text-blue-600 hover:underline flex items-center"
      >
        ← Volver a Dominios
      </button>

      {isLoading ? (
        <Loading message="Cargando buckets..." />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-2">
            Buckets de {model?.environmentName || "Entorno Desconocido"}
          </h1>
          <p className="text-gray-500 mb-6">
            Selecciona un bucket para continuar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {model?.buckets?.map((bucketName) => (
              <div
                key={bucketName}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition shadow-sm"
                // --- NUEVO: Ejecutamos la navegación ---
                onClick={() => onSelectBucket(bucketName)}
              >
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                  <span
                    className="font-medium text-gray-700 truncate"
                    title={bucketName}
                  >
                    {bucketName}
                  </span>
                </div>
              </div>
            ))}

            {model?.buckets?.length === 0 && (
              <div className="col-span-3 text-center text-gray-500 py-10">
                Este entorno no tiene buckets configurados.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BucketListScreen;
