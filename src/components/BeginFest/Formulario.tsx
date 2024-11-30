import React, { useState } from "react";

const Formulario: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-2xl mx-auto p-6 text-tbc-primaryred-600 bg-tbc-primaryred-100 shadow-md rounded-md">
      {/* Header con los pasos */}
      <div className="flex justify-between items-center mb-6">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              s === step ? "bg-gray-900 text-white" : "bg-gray-300 text-gray-600"
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Contenido dinámico */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">¿Cómo quieres participar?</h2>
          <form className="space-y-4">
            {[
              "Dando Charlas",
              "Haciendo un Taller",
              "Participando en un Panel",
              "Intercambiando Productos o Servicios",
              "Vendiendo Productos o Servicios",
              "Exponiendo Arte",
            ].map((option) => (
              <label key={option} className="block">
                <input
                  type="radio"
                  name="participacion"
                  value={option}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">¡Queremos conocerte!</h2>
          <form className="space-y-4">
            <textarea
              placeholder="Cuéntanos de ti"
              className="w-full border rounded-md p-2"
            />
            <textarea
              placeholder="¿Qué tipo de charlas haces?"
              className="w-full border rounded-md p-2"
            />
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Carga de Archivos y Redes Sociales
          </h2>
          <form className="space-y-4">
            <input type="file" className="w-full border rounded-md p-2" />
            <input
              type="text"
              placeholder="Youtube"
              className="w-full border rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Facebook"
              className="w-full border rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Instagram"
              className="w-full border rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Otro (¿Cuál?)"
              className="w-full border rounded-md p-2"
            />
          </form>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Información Básica
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border rounded-md p-2"
            />
            <input
              type="email"
              placeholder="Correo"
              className="w-full border rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Ciudad"
              className="w-full border rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Número de Contacto"
              className="w-full border rounded-md p-2"
            />
            <input
              type="number"
              placeholder="Edad"
              className="w-full border rounded-md p-2"
            />
          </form>
        </div>
      )}

      {/* Botones de navegación */}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-md"
            onClick={prevStep}
          >
            Anterior
          </button>
        )}
        {step < 4 ? (
          <button
            className="px-4 py-2 bg-tbc-pilarbrown-500 hover:bg-tbc-pilarbrown-600 text-white rounded-md"
            onClick={nextStep}
          >
            Siguiente
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-tbc-pilarorange-500 hover:bg-tbc-pilarorange-600 text-white rounded-md"
            onClick={() => alert("Formulario enviado")}
          >
            Enviar
          </button>
        )}
      </div>
    </div>
  );
};

export default Formulario;