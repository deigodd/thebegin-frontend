import React, { useState } from 'react';
import { AlignLeft } from 'lucide-react';
import SidebarMenu from './SidebarMenu';

interface CategoriesSidebarProps {
  onCategorySelect: (category: string) => void;
}

const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({ onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Botón de hamburguesa para pantallas pequeñas */}
      <button
        className="2xl:hidden bg-tbc-primarybrown-600 text-white p-2 mb-2"
        onClick={toggleMenu}
      >
        <AlignLeft />
      </button>

      {/* Sidebar o pop-up según el tamaño de pantalla */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 xs:hidden">
          <div className="bg-tbc-primaryred-100 rounded w-3/4 max-w-xs">
            <SidebarMenu onClose={toggleMenu} onCategorySelect={onCategorySelect}/>
          </div>
        </div>
      )}
      
      {/* Sidebar para pantallas grandes */}
      <aside className="hidden 2xl:block w-64">
        <SidebarMenu onCategorySelect={onCategorySelect}/>
      </aside>
    </div>
  );
};

export default CategoriesSidebar;
