import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import BackgroundSettings from '../Hooks/BackgroundSectionSettings';
import ChangeImage from '../Hooks/ChangeImage';

const ProfileContact: React.FC = () => {
  const [bgColor, setBgColor] = useState('#000000');
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(true); // Mostrar panel al hacer clic
  };

  const handleCloseSettings = () => {
    setShowSettings(false); // Cerrar el panel después de seleccionar una opción
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundColor: bgImage ? undefined : bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
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

        {/* Panel de opciones */}
        {showSettings && (
          <BackgroundSettings
            bgColor={bgColor}
            setBgColor={setBgColor}
            setBgImage={setBgImage}
            onClose={handleCloseSettings} // Cerrar el panel después de seleccionar una opción
          />
        )}
      </div>

      {/* Contenido de la tarjeta */}
      <div className="flex relative justify-center items-center text-center rounded-t-full bg-red-600 h-[490px] w-[390px] overflow-hidden">
        <ChangeImage/>
      </div>
    </section>
  );
};

export default ProfileContact;
