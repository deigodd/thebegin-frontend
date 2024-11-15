import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';

const ProfileCalendar: React.FC = () => {
  const [bgColor, setBgColor] = useState('#2d3748');
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
    setBgImage(null); // Quitar imagen si el usuario elige un color
    setShowSettings(false); // Cerrar el panel solo después de seleccionar un color
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBgImage(reader.result as string);
        setBgColor(''); // Limpiar color si se selecciona una imagen
        setShowSettings(false); // Cerrar el panel solo después de seleccionar una imagen
      };
      reader.readAsDataURL(file);
    }
  };

  // Mostrar/ocultar panel de configuración al hacer clic
  const handleSettingsClick = () => {
    setShowSettings(true); // Mostrar panel al hacer clic
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
        onClick={handleSettingsClick} // Mostrar el panel al hacer clic
      >
        <FaCog size={24} />

        {/* Panel de opciones */}
        {showSettings && (
          <div className="absolute top-8 left-0 bg-gray-700 bg-opacity-90 text-white p-4 rounded-lg shadow-lg space-y-2">
            {/* Selector de color */}
            <label className="block">
              Color de fondo:
              <input
                type="color"
                value={bgColor}
                onChange={handleColorChange}
                className="ml-2 p-1 rounded"
              />
            </label>

            {/* Selector de imagen */}
            <label className="block">
              Imagen de fondo:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="ml-2 p-1 rounded"
              />
            </label>
          </div>
        )}
      </div>

      {/* Contenido de la tarjeta */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Calendario</h2>
        <p className="text-white">Listado de actividades por fecha, con opción de consulta mediante formulario.</p>
      </div>
    </section>
  );
};

export default ProfileCalendar;
