import React from 'react';

const MarketPlace: React.FC = () => {
  return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded shadow">
                <div className="bg-gray-300 h-32 w-full mb-2"></div>
                <h2 className="text-lg font-semibold">Producto 1</h2>
            </div>
        </div>
  );
};

export default MarketPlace;
