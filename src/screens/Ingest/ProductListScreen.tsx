import {
  EndpointName,
  EndpointStatus,
  ProductsStateModel,
} from "controllers/Ingest/ProductListController";
import Loading from "components/Global/Loading/Loading";

interface Props {
  model: Partial<ProductsStateModel> | undefined;
  endpoints: Partial<Record<EndpointName, EndpointStatus>> | undefined;
  onSelectProduct: (productName: string) => void;
  onBack: () => void;
}

const ProductListScreen = ({
  model,
  endpoints,
  onSelectProduct,
  onBack,
}: Props) => {
  const isLoading = endpoints?.GetProducts?.loading;

  return (
    <div className="p-10">
      {/* Botón Volver */}
      <button
        onClick={onBack}
        className="mb-4 text-sm text-blue-600 hover:underline flex items-center"
      >
        ← Volver a Buckets
      </button>

      {/* Header con contexto */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Productos de Datos</h1>
        <p className="text-sm text-gray-500 mt-1">
          Bucket:{" "}
          <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-700">
            {model?.bucketName}
          </span>
        </p>
      </div>

      {isLoading ? (
        <Loading message="Buscando productos..." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {model?.products?.map((prod) => (
            <div
              key={prod.id}
              className="group p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-400 cursor-pointer transition-all duration-200"
              onClick={() => onSelectProduct(prod.id)}
            >
              <div className="flex items-center gap-4">
                {/* Icono de Carpeta/Producto */}
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-800 truncate group-hover:text-blue-700">
                    {prod.label}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Producto de datos
                  </p>
                </div>

                {/* Flecha indicativa */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300 group-hover:text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}

          {model?.products?.length === 0 && (
            <div className="col-span-full py-12 text-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <p className="text-gray-500">
                No se encontraron productos en este bucket.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductListScreen;
