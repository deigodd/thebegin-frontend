import React from "react";
import backgroundImage from "../assets/background-home.svg";

const NotFound: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <p className="text-base font-semibold text-tbc-pilarorange-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
          Aún no comenzamos por acá, pero pronto lo haremos.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-tbc-pilarorange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-tbc-pilarorange-500 transition-colors duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tbc-pilarorange-600"
          >
            Volver a The Begin
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
