import React, { useEffect, useState } from 'react';
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa';

interface AudioCardProps {
  defaultInnerImageUrl?: string; // Cambiado a opcional usando '?'
}

const AudioCard: React.FC<AudioCardProps> = ({ defaultInnerImageUrl = 'default-image-url.jpg' }) => {
  const [innerImageUrl, setInnerImageUrl] = useState(defaultInnerImageUrl);

  // Cargar la imagen interna desde localStorage si existe
  useEffect(() => {
    const savedInnerImage = localStorage.getItem('audioCardInnerImage');
    if (savedInnerImage) {
      setInnerImageUrl(savedInnerImage);
    }
  }, []);

  // Manejar el cambio de imagen interna
  const handleInnerImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setInnerImageUrl(result);
        localStorage.setItem('audioCardInnerImage', result); // Guardar la imagen en localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-80 h-96 bg-gray-100 rounded-lg shadow-xl overflow-hidden flex flex-col justify-end items-center p-4">
      {/* Sección de imagen interna */}
      <div className="relative w-full h-2/3 overflow-hidden rounded-lg mb-4 shadow-lg mt-4">
        <img src={innerImageUrl} alt="Inner" className="w-full h-full object-cover rounded-lg" />
        
        {/* Superposición para cambiar la imagen */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
          <label className="text-white cursor-pointer">
            Cambiar imagen
            <input
              type="file"
              accept="image/*"
              onChange={handleInnerImageChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Sección de texto */}
      <div className="text-gray-700 text-center w-full mb-2">
        <h1 className="text-2xl font-semibold">¡Hola!</h1>
        <p className="text-sm font-light">Me presento</p>
      </div>

      {/* Controles de audio */}
      <div className="flex items-center justify-center gap-4 mb-4 text-gray-700">
        <button className="text-xl">
          <FaBackward />
        </button>
        <button className="text-3xl">
          <FaPlay /> {/* Cambiar a <FaPause /> cuando esté en reproducción */}
        </button>
        <button className="text-xl">
          <FaForward />
        </button>
      </div>

      {/* Barra de progreso */}
      <input type="range" className="w-3/4 mb-4" />
    </div>
  );
};

export default AudioCard;
