import React, { useEffect, useState } from 'react';
import {  FaPause, FaBackward, FaForward } from 'react-icons/fa';

interface AudioCardProps {
  defaultInnerImageUrl?: string;
}

const AudioCard: React.FC<AudioCardProps> = ({ defaultInnerImageUrl = 'default-image-url.jpg' }) => {
  const [innerImageUrl, setInnerImageUrl] = useState(defaultInnerImageUrl);

  useEffect(() => {
    const savedInnerImage = localStorage.getItem('audioCardInnerImage');
    if (savedInnerImage) {
      setInnerImageUrl(savedInnerImage);
    }
  }, []);

  const handleInnerImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setInnerImageUrl(result);
        localStorage.setItem('audioCardInnerImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative border border-gray-400 w-[450px] h-[700px] max-h-[600px] rounded-lg shadow-xl overflow-hidden flex flex-col justify-between items-center p-4 common-border">
      {/* Imagen interna */}
      <div className="relative w-full h-[60%] overflow-hidden rounded-lg mb-4">
        <img src={innerImageUrl} alt="Inner" className="object-cover rounded-lg w-full h-full" />
        
        <div className="absolute inset-0 flex items-center justify-center pt-4 px-10 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
          <label className="text-white cursor-pointer text-lg">
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


      {/* Texto */}
      <div className="text-gray-500 text-center w-full mb-5">
        <h1 className="text-3xl font-semibold">¡Hola!</h1>
        <p className="text-lg font-light">Me presento</p>
      </div>

      {/* Controles de audio */}
      <div className="flex items-center justify-center gap-6 text-gray-500 mb-8">
        <button className="text-2xl">
          <FaBackward />
        </button>
        <button className="text-4xl">
          <FaPause />
        </button>
        <button className="text-2xl">
          <FaForward />
        </button>
      </div>
    </div>
  );
};

export default AudioCard;
