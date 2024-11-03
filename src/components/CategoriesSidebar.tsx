import React from 'react';

const CategoriesSidebar: React.FC = () => {
  const categories = [
    "The Begin", "Arte con Sentido", "Consumo con Sentido", "Bienestar",
    "Salud Mental", "Medio Ambiente", "Trueque", "Membresía"
  ];

  return (
    <aside className="bg-gray-100 p-4 w-64">
      <h2 className="text-lg font-bold mb-4">Categorías</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category} className="flex items-center">
            <div className="w-4 h-4 bg-orange-500 mr-2 rounded-full"></div>
            <span className="text-gray-700">{category}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoriesSidebar;
