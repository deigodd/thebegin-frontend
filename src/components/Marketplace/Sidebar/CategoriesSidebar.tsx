import React, { useState } from 'react';
import { AlignLeft } from 'lucide-react';
import SidebarMenu from './SidebarMenu';

const CategoriesSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Botón de hamburguesa para pantallas pequeñas */}
      <button
        className="md:hidden bg-[#766146] text-white p-2 mb-2"
        onClick={toggleMenu}
      >
        <AlignLeft />
      </button>

      {/* Sidebar o pop-up según el tamaño de pantalla */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 md:hidden">
          <div className="bg-white w-3/4 max-w-xs">
            <SidebarMenu onClose={toggleMenu} />
          </div>
        </div>
      )}
      
      {/* Sidebar para pantallas grandes */}
      <aside className="hidden md:block w-64">
        <SidebarMenu />
      </aside>
    </div>
  );
};

export default CategoriesSidebar;
