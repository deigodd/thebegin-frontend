import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import BackgroundSettings from '../Hooks/BackgroundSectionSettings';

const ProfileMarketplace: React.FC = () => {
  const [bgColor, setBgColor] = useState('#302c2c'); // Color de fondo inicial
  const [bgImage, setBgImage] = useState<string | null>(null); // Imagen de fondo inicial
  const [showSettings, setShowSettings] = useState(false); // Estado para mostrar el panel de configuración

  const handleSettingsClick = () => {
    setShowSettings(true); // Mostrar el panel de configuración al hacer clic
  };

  const handleCloseSettings = () => {
    setShowSettings(false); // Cerrar el panel de configuración
  };

  return (
    <section
      className="relative min-h-screen py-10"
      style={{
        backgroundColor: bgImage ? undefined : bgColor, // Usa color si no hay imagen
        backgroundImage: bgImage ? `url(${bgImage})` : undefined, // Usa imagen si está definida
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Ícono de configuración */}
      <div
        className="absolute top-5 left-5 text-white cursor-pointer"
        onClick={handleSettingsClick}
      >
        <FaCog size={24} />

        {/* Panel de configuración */}
        {showSettings && (
          <BackgroundSettings
            bgColor={bgColor}
            setBgColor={setBgColor}
            setBgImage={setBgImage}
            onClose={handleCloseSettings}
          />
        )}
      </div>
      <div className='flex absolute bottom-48 w-screen h-44 bg-[#504c54]'/>
      
      {/* Contenido principal con el diseño de las imágenes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 relative px-10 md:px-28">
        <div className="flex justify-center items-center h-full w-full min-h-[550px] min-w-[160px] row-span-2 rounded-tl-[80px] overflow-hidden hover:scale-105 transition">
          <img src="https://www.blogdelfotografo.com/wp-content/uploads/2024/02/pose-fotos-mujer-cabello-contrapicado.webp" alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col justify-center items-center bg-[#606464] h-full w-full min:h-[550px] min-w-[160px] row-span-2 overflow-hidden hover:scale-105 transition">
          <p className='text-center text-white text-4xl sm:text-6x1 lg:text-7xl'>Visitá</p>
          <p className='relative text-center text-white text-4xl sm:text-6x1 lg:text-7xl'>mi</p>
          <p className='relative text-center text-white text-4xl sm:text-6x1 lg:text-7xl'>Tienda</p>
          <button className="text-white text-base sm:text-lg border hover:bg-white hover:text-black hover:scale-105 transition rounded-3xl mt-10 w-36 sm:w-44 sm:h-10">Ver Tienda</button>
        </div>
        <div className="flex justify-center items-center h-full w-full min-h-[312px] min-w-[160px] row-span-2 overflow-hidden hover:scale-105 transition">
          <img src="https://images.pexels.com/photos/12011949/pexels-photo-12011949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-center items-center h-full w-full md:h-[312px] min-w-[160px] rounded-tl-[80px] rounded-br-[80px] overflow-hidden hover:scale-105 transition">
          <img src="https://images.unsplash.com/photo-1651607138360-4956f0a73de0?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-center items-center h-full w-full min-h-[550px] min-w-[160px] row-span-2 overflow-hidden hover:scale-105 transition">
          <img src="https://images.unsplash.com/photo-1598121496608-3d0b9627155e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-center items-center h-full w-full md:h-[312px] min-w-[160px] rounded-tl-[80px] rounded-br-[80px] overflow-hidden hover:scale-105 transition">
          <img src="https://static.wixstatic.com/media/1ae557_c6ccce7294d44a54a8c4c012b8e5c5cc~mv2.jpg/v1/fill/w_500,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1ae557_c6ccce7294d44a54a8c4c012b8e5c5cc~mv2.jpg" alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-center items-center h-full w-full md:h-[312px] min-w-[160px] rounded-full overflow-hidden hover:scale-105 transition">
          <img src="https://images.unsplash.com/photo-1517466996322-2668610a3309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDM3fHxMRVRURVIlMjBEfGVufDB8fHx8MTcyMTE3NDUzNnww&ixlib=rb-4.0.3&q=80&w=2000" alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-center items-center h-full w-full md:h-[250px] min-w-[160px] overflow-hidden hover:scale-105 transition">
          <img src="https://i0.wp.com/pontechula.co/wp-content/uploads/2023/04/Diseno-sin-titulo-73.jpg?fit=1080%2C1080&ssl=1" alt="img" className="object-cover w-full h-full" />
        </div>
      </div>

    </section>
  );
};

export default ProfileMarketplace;
