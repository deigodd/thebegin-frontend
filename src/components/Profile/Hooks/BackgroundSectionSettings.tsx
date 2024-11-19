import React from 'react';

interface BackgroundSettingsProps {
  bgColor: string;
  setBgColor: (color: string) => void;
  setBgImage: (image: string | null) => void;
  onClose: () => void;
}

const BackgroundSettings: React.FC<BackgroundSettingsProps> = ({ bgColor, setBgColor, setBgImage, onClose }) => {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
    setBgImage(null); // Quitar imagen si el usuario elige un color
    onClose(); // Cerrar el panel después de seleccionar un color
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBgImage(reader.result as string);
        setBgColor(''); // Limpiar color si se selecciona una imagen
        onClose(); // Cerrar el panel después de seleccionar una imagen
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-700 bg-opacity-90 text-white p-4 rounded-lg shadow-lg space-y-2">
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
  );
};

export default BackgroundSettings;
