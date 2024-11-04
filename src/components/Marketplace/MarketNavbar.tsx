import React from 'react';

const MarketNavbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 grid justify-center items-center text-white">
      {/* Logo y título */}
      <div className="flex justify-center items-center space-x-3">
        <div className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
          {/* Placeholder para el logo */}
          <span className="text-lg font-bold">Logo</span>
        </div>
        <span className="text-2xl font-semibold">The Begin</span>
      </div>

      {/* Links de navegación */}
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">Tienda</a></li>
        <li><a href="#" className="hover:text-gray-300">Promociones</a></li>
        <li><a href="#" className="hover:text-gray-300">Noticias</a></li>
      </ul>
    </nav>
  );
};

export default MarketNavbar;
