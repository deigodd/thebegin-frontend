import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';

interface BackgroundSettingsProps {
  onChange: (color: string, image: string | null) => void;
}

const BackgroundSettings: React.FC<BackgroundSettingsProps> = ({ onChange }) => {
  const [bgColor, setBgColor] = useState('#2d3748');
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
    setBgImage(null); // Quitar imagen si el usuario elige un color
    onChange(e.target.value, null); // Pasar color seleccionado
    setShowSettings(false); // Cerrar el panel después de seleccionar un color
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBgImage(reader.result as string);
        setBgColor(''); // Limpiar color si se selecciona una imagen
        onChange('', reader.result as string); // Pasar imagen seleccionada
        setShowSettings(false); // Cerrar el panel después de seleccionar una imagen
      };
      reader.readAsDataURL(file);
    }
  };

  // Mostrar/ocultar panel de configuración al hacer clic
  const handleSettingsClick = () => {
    setShowSettings(!showSettings); // Alternar el estado de visibilidad del panel
  };

  return (
    <div>
      {/* Ícono de configuración */}
      <div
        className="absolute top-5 left-5 text-white cursor-pointer"
        onClick={handleSettingsClick} // Mostrar/ocultar el panel al hacer clic
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
    </div>
  );
};

export default BackgroundSettings;
