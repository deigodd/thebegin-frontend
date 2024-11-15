import React from "react";

interface PageSeparatorProps {
  title: string;
}
// SEPARADOR DE SECCIONES DE PÁGINA
const PageSeparator: React.FC<PageSeparatorProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center w-full">
        <hr className="flex-grow sm:w-96 h-1 my-4 sm:my-8 bg-tbc-pilarorange-600 border-0 rounded" />
        <p className="px-2 sm:px-3 text-tbc-pilarorange-600 text-5xl -mt-2 sm:text-7xl font-serif font-semibold">
          {"{"}
        </p>
        <p className="px-2 sm:px-3 text-tbc-pilarorange-600 text-3xl sm:text-5xl font-serif">
          {title}
        </p>
        <p className="px-2 sm:px-3 text-tbc-pilarorange-600 text-5xl -mt-2 sm:text-7xl font-serif font-semibold">
          {"}"}
        </p>
        <hr className="flex-grow sm:w-96 h-1 my-4 sm:my-8 bg-tbc-pilarorange-600 border-0 rounded" />
      </div>
    </div>
  );
};

export default PageSeparator;
