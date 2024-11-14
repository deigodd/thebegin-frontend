import React, { useState } from 'react';
import CategoryItem from './CategoryItem';
import iconPath from '../../../assets/icons/svg/tb-icon-outline-brown.svg';

interface SidebarMenuProps {
  onClose?: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ onClose }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div>
      <h2 className="bg-tbc-primarybrown-600 p-2 text-white text-lg rounded-sm font-bold">
        Categorías
      </h2>
      <ul className="space-y-1">
        {categories.map((category) => (
          <React.Fragment key={category}>
            <CategoryItem
              category={category}
              iconPath={iconPath}
              isExpanded={expandedCategory === category}
              onClick={() => toggleCategory(category)}
            />
            {/* Línea divisoria después de "Medio Ambiente" o "Membresía" */}
            {(category === "Medio Ambiente" || category === "Membresía") && (
              <hr className="border-4 border-tbc-primaryred-600 my-2" />
            )}
          </React.Fragment>
        ))}
      </ul>
      {/* Botón de cierre, visible solo en pop-up */}
      {onClose && (
        <button
          className="mt-4 w-full bg-red-500 text-white p-2 rounded-sm"
          onClick={onClose}
        >
          Cerrar
        </button>
      )}
    </div>
  );
};

export default SidebarMenu;
