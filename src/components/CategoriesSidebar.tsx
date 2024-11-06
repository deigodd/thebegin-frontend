import React from 'react';

const CategoriesSidebar: React.FC = () => {
  const categories = [
    "The Begin", "Arte con Sentido", "Consumo con Sentido", "Bienestar",
    "Salud Mental", "Medio Ambiente", "Trueque", "Membresía"
  ];

  return (
    <aside className="w-64">
      <h2 className="bg-[#766146] p-2 text-white text-lg rounded-sm font-bold">Categorías</h2>
      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category} className="bg-[#fefeff] p-2 rounded-sm flex items-center">
            <div className="w-4 h-4 bg-orange-500 mr-2 rounded-full"></div>
            <span className="text-gray-700">{category}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoriesSidebar;
