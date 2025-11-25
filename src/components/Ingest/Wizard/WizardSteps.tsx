import { useState } from "react";
import {
  AnalysisStep1Data,
  AnalysisStep2Data,
  AnalysisStep3Data,
} from "models/Ingest/analysis-model";

// --- HELPERS ---
const DetailRow = ({ label, value }: { label: string; value: any }) => (
  <div className="grid grid-cols-4 py-1.5 border-b border-gray-100 last:border-0">
    <span className="font-medium text-gray-600">{label}:</span>
    <span className="col-span-3 text-gray-900 text-sm font-semibold">
      {value || "-"}
    </span>
  </div>
);

// --- STEP 1: CONFIRMACIÓN ---
export const Step1Confirmation = ({ data }: { data: AnalysisStep1Data }) => {
  if (!data) return <div className="p-4 text-center">Cargando datos...</div>;
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="font-bold text-lg mb-4 text-gray-800">
        Resumen del Archivo
      </h3>
      <DetailRow label="Nombre" value={data.nombre_archivo} />
      <DetailRow label="Tamaño" value={data.tamano} />
      <DetailRow label="Tipo" value={data.tipo_archivo} />
      <DetailRow label="Fecha Carga" value={data.fecha_de_carga} />
      <DetailRow label="Hora Carga" value={data.hora_de_carga} />
    </div>
  );
};

// --- STEP 2: ESTRUCTURA ---
export const Step2Structure = ({ data }: { data: AnalysisStep2Data }) => {
  const [tab, setTab] = useState<"columns" | "preview">("columns");

  if (!data)
    return <div className="p-4 text-center">Cargando estructura...</div>;

  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-50 p-3 rounded text-center">
          <span className="block text-xs text-gray-500">Columnas</span>
          <span className="text-xl font-bold text-blue-700">
            {data.numero_columnas}
          </span>
        </div>
        <div className="bg-blue-50 p-3 rounded text-center">
          <span className="block text-xs text-gray-500">Registros</span>
          <span className="text-xl font-bold text-blue-700">
            {data.numero_registros}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-3">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            tab === "columns"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setTab("columns")}
        >
          Columnas
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            tab === "preview"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setTab("preview")}
        >
          Vista Previa
        </button>
      </div>

      <div className="flex-grow overflow-y-auto border rounded bg-gray-50 p-2 max-h-60">
        {tab === "columns" ? (
          <ul className="space-y-2">
            {data.columnas_encontradas.map((col, idx) => (
              <li
                key={idx}
                className="flex justify-between bg-white p-2 rounded shadow-sm text-sm"
              >
                <span className="font-medium text-gray-700">{col.nombre}</span>
                <span className="bg-gray-200 px-2 py-0.5 rounded text-xs text-gray-600">
                  {col.tipo}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <table className="min-w-full text-xs bg-white">
            <thead>
              <tr className="bg-gray-100">
                {data.columnas_encontradas.map((c) => (
                  <th key={c.nombre} className="p-2 text-left">
                    {c.nombre}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.vista_previa.map((row, idx) => (
                <tr key={idx} className="border-t">
                  {data.columnas_encontradas.map((c) => (
                    <td key={c.nombre} className="p-2 truncate max-w-[100px]">
                      {row[c.nombre]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

// --- STEP 3: VALIDACIÓN ---
export const Step3Validation = ({ data }: { data: AnalysisStep3Data }) => {
  if (!data) return <div className="p-4 text-center">Validando...</div>;

  const hasErrors = data.alertas && data.alertas.length > 0;

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      {hasErrors ? (
        <div className="w-full bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Se encontraron alertas
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc pl-5 space-y-1">
                  {data.alertas.map((alert, idx) => (
                    <li key={idx}>{alert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Validación Exitosa
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            La estructura del archivo es correcta y no se encontraron errores
            críticos.
          </p>
        </div>
      )}
    </div>
  );
};
