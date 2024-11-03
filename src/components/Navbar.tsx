import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 flex justify-between items-center text-white">
      {/* Logo y título */}
      <div className="flex items-center space-x-3">
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

      {/* Opciones de usuario */}
      <div className="flex items-center space-x-4">
        <span className="hover:text-gray-300">Login</span>
        <span className="hover:text-gray-300">Mi Cuenta</span>
        <span className="hover:text-gray-300">Español</span>
        <span className="hover:text-gray-300">Moneda</span>
      </div>
    </nav>
  );
};

export default Navbar;
