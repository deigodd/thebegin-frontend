import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

const MarketPlace: React.FC = () => {
  return (
    <div className="flex-1 p-6">
      <SearchBar/>
      <div className="bg-cover bg-center h-48 w-full mb-4 bg-gradient-to-r from-orange-200 to-yellow-300 flex items-center justify-center ">
        <h1 className="text-3xl font-bold text-white">Bienvenido a The Begin</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="bg-gray-300 h-32 w-full mb-2"></div>
          <h2 className="text-lg font-semibold">Producto 1</h2>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="bg-gray-300 h-32 w-full mb-2"></div>
          <h2 className="text-lg font-semibold">Producto 2</h2>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="bg-gray-300 h-32 w-full mb-2"></div>
          <h2 className="text-lg font-semibold">Producto 3</h2>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
