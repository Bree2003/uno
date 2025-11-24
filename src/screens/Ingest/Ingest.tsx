import {
  EndpointName,
  EndpointStatus,
  IngestModel,
} from "controllers/Ingest/controller";
import Loading from "components/Global/Loading/Loading";

interface Props {
  model: Partial<IngestModel> | undefined;
  endpoints: Partial<Record<EndpointName, EndpointStatus>> | undefined;
  // 1. AÑADIDO: Definimos la función que viene del Controller
  onSelectEnvironment: (envId: string) => void;
}

// 2. AÑADIDO: Recibimos la prop aquí
const IngestScreen = ({ model, endpoints, onSelectEnvironment }: Props) => {
  const isLoading = endpoints?.GetEnvironments?.loading;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Selecciona un Dominio</h1>

      {isLoading ? (
        <Loading message="Cargando entornos..." />
      ) : (
        <div className="flex flex-col gap-3">
          {model?.environments?.map((env) => (
            <div
              key={env.id}
              className="p-4 border rounded shadow hover:bg-gray-50 cursor-pointer transition"
              // 3. AÑADIDO: Ejecutamos la navegación pasando el ID
              onClick={() => onSelectEnvironment(env.id)}
            >
              <span className="font-semibold text-lg text-blue-900">
                {env.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IngestScreen;
