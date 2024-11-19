import React from 'react'

type Props = {}

const ProfileMarketplace = (props: Props) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-600 p-10">
        <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Marketplace</h2>
            <p>Presentación de productos en el Marketplace, con enlace a la tienda online.</p>
        </div>
    </section>
  )
}

export default ProfileMarketplace
import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import BackgroundSettings from '../Hooks/BackgroundSectionSettings';


const ProfileMarketplace: React.FC = () => {
  const [bgColor, setBgColor] = useState('#4B5563');
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
    className="relative flex items-center justify-center min-h-screen p-10"
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
        <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Marketplace</h2>
            <p>Presentación de productos en el Marketplace, con enlace a la tienda online.</p>
        </div>
    </section>
  )
}

export default ProfileMarketplace