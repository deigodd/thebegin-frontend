import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import BackgroundSettings from '../Hooks/BackgroundSectionSettings';
import img1 from '../../../assets/img1_MKplaceP1.jpg';
import img2 from '../../../assets/img2_MKplaceP1.jpg';
import img3 from '../../../assets/img3_MKplaceP1.jpg';
import img4 from '../../../assets/img4_MKplaceP1.jpg';
import img5 from '../../../assets/img5_MKplaceP1.jpg';
import img6 from '../../../assets/img6_MKplaceP1.jpg';
import img7 from '../../../assets/img7_MKplaceP1.jpg';

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
        <div className="flex justify-center items-center bg-red-800 h-full w-full min-h-[550px] min-w-[160px] row-span-2 rounded-tl-[80px] overflow-hidden hover:scale-105 transition">
          <img src={img1} alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col justify-center items-center bg-[#606464] h-full w-full min:h-[550px] min-w-[160px] row-span-2 overflow-hidden hover:scale-105 transition">
          <p className='text-center text-white text-4xl sm:text-6x1 lg:text-7xl'>Visitá</p>
          <p className='relative text-center text-white text-4xl sm:text-6x1 lg:text-7xl'>mi</p>
          <p className='relative text-center text-white text-4xl sm:text-6x1 lg:text-7xl'>Tienda</p>
          <button className="text-white text-base sm:text-lg border hover:bg-white hover:text-black hover:scale-105 transition rounded-3xl mt-10 w-36 sm:w-44 sm:h-10">Ver Tienda</button>
        </div>
        <div className="flex justify-center items-center bg-red-800 h-full w-full min-h-[312px] min-w-[160px] row-span-2 overflow-hidden hover:scale-105 transition">
          <img src={img2} alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-center items-center bg-red-800 h-full w-full md:h-[312px] min-w-[160px] rounded-tl-[80px] rounded-br-[80px] overflow-hidden hover:scale-105 transition">
          <img src={img3} alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-center items-center bg-red-800 h-full w-full min-h-[550px] min-w-[160px] row-span-2 overflow-hidden hover:scale-105 transition">
          <img src={img6} alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-center items-center bg-red-800 h-full w-full md:h-[312px] min-w-[160px] rounded-tl-[80px] rounded-br-[80px] overflow-hidden hover:scale-105 transition">
          <img src={img4} alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-center items-center bg-red-800 h-full w-full md:h-[312px] min-w-[160px] rounded-full overflow-hidden hover:scale-105 transition">
          <img src={img5} alt="img" className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-center items-center bg-red-800 h-full w-full md:h-[250px] min-w-[160px] overflow-hidden hover:scale-105 transition">
          <img src={img7} alt="img" className="object-cover w-full h-full" />
        </div>
      </div>

    </section>
  );
};

export default ProfileMarketplace;
