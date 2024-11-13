import React from 'react';
import WriteCard from '../Hooks/WriteCard';
import { PiStarFourFill } from "react-icons/pi";
import itemData from '../../../data/itemData.json';

const ProfileProjects: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#242c34]">
      <div className="flex w-full h-full">

        {/* Primer div (lado izquierdo) */}
        <div className="flex-1 flex justify-center text-center text-xl font-semibold text-gray-700 mb-4">
          <ul className="space-y-2">
            <h2 className='text-white mb-4 text-4xl'>Sesiones</h2> {/* Título más grande */}
            {itemData.items.map((item) => (
              <li key={item.id} className="flex items-center">
                <PiStarFourFill className="text-white mr-5" /> {/* Ícono personalizado */}
                <span className="text-white mb-3">{item.sections}</span> {/* Texto de cada sección */}
              </li>
            ))}
          </ul>
        </div>

        {/* Línea vertical para separar ambos divs */}
        <div className="hidden sm:block w-px bg-white h-full" />

        {/* Segundo div (lado derecho) */}
        <div className="flex-1 flex justify-center text-center text-2xl font-semibold text-gray-700 mb-4">
          <WriteCard />
        </div>

      </div>
    </section>
  );
};

export default ProfileProjects;
