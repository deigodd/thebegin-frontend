import React, { useState } from "react";
import { FaCog } from "react-icons/fa";
import BackgroundSettings from "../Hooks/BackgroundSectionSettings";
import bg from "../../../assets/membershipBg.jpg";

const ProfileMembership: React.FC = () => {
  const [bgColor, setBgColor] = useState("#374151");
  const [bgImage, setBgImage] = useState<string | null>(bg);
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundColor: bgImage ? undefined : bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay con opacidad para el fondo */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Ícono de configuración */}
      <div
        className="absolute top-5 left-5 text-white cursor-pointer z-20"
        onClick={handleSettingsClick}
      >
        <FaCog size={24} />
        {showSettings && (
          <BackgroundSettings
            bgColor={bgColor}
            setBgColor={setBgColor}
            setBgImage={setBgImage}
            onClose={handleCloseSettings}
          />
        )}
      </div>

      {/* Contenedor principal centrado */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-screen-md mx-auto p-4 md:p-8">
        {/* Grid para las tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-[500px_700px] gap-8">
          {/* Tarjeta de membresía */}
          <div className="flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg p-6 shadow-lg lg:min-h-[600px] lg:min-w-[500px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MEMBRESÍA</h2>
            <p className="text-6xl md:text-7xl font-bold my-4">$50</p>
            <p className="text-xl md:text-2xl">PROMO</p>
            <p className="text-xl md:text-2xl">LANZAMIENTO</p>
            <div className="w-full h-[2px] bg-gray-500 my-6" />
            <p className="text-lg md:text-xl mb-6">¡No te lo pierdas!</p>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-lg font-bold rounded-full px-8 py-3 transition">
              SUSCRIBIRME
            </button>
          </div>

          {/* Beneficios */}
          <div className="flex flex-col justify-center bg-black bg-opacity-30 text-white rounded-lg p-6 shadow-lg lg:min-h-[600px] lg:min-w-[700px]">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Tenemos beneficios exclusivos para nuestra Comunidad Gold:
            </h3>
            <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
              <li>Sesiones fotográficas</li>
              <li>Acceso a Encuentros VIP</li>
              <li>Taller de fotografía</li>
              <li>Descuentos en productos</li>
              <li>Sorteos</li>
              <li>¡Y mucho más!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileMembership;
