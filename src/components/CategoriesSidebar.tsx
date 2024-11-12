import React, { useState } from 'react';
import iconPath from '../assets/icons/tb-icon-outline.svg';

const CategoriesSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "The Begin",
    "Arte con Sentido",
    "Consumo con Sentido",
    "Bienestar",
    "Salud Mental",
    "Medio Ambiente",
    "Trueque",
    "Membresía",
  ];
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botón de hamburguesa solo visible en pantallas pequeñas */}
      <button
        className="md:hidden bg-[#766146] text-white p-2 rounded-sm mb-2"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Modal que contiene el sidebar para pantallas pequeñas */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-3/4 max-w-xs rounded-md p-4">
            <h2 className="bg-[#766146] p-2 text-white text-lg rounded-sm font-bold">
              Categorías
            </h2>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category} className="bg-[#fefeff] p-2 rounded-sm flex items-center">
                  <img src={iconPath} className="w-8 h-8 mr-2" alt="TBicon" />
                  <span className="text-gray-700">{category}</span>
                </li>
              ))}
            </ul>
            {/* Botón de cierre */}
            <button
              className="mt-4 w-full bg-red-500 text-white p-2 rounded-sm"
              onClick={toggleMenu}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Sidebar visible en pantallas grandes */}
      <aside className="hidden md:block w-64">
        <h2 className="bg-[#766146] p-2 text-white text-lg rounded-sm font-bold">
          Categorías
        </h2>
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category} className="bg-[#fefeff] p-2 rounded-sm flex items-center">
              <img src={iconPath} className="w-8 h-8 mr-2" alt="TBicon" />
              <span className="text-gray-700">{category}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default CategoriesSidebar;
