import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-100 to-gray-300 p-4 flex justify-end items-right text-black">
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
