import React from 'react';

type CardTradeProps = {
  image: string;    // Ruta de la imagen
  title: string;    // Título de la tarjeta
  altText: string;  // Texto alternativo para la imagen
  className?: string; // Clases adicionales para personalización
};

const CardTrade = ({ image, title, altText, className }: CardTradeProps) => {
  return (
    <div className={`flex flex-col items-center justify-center bg-blue-800 p-4 rounded-lg text-center h-[160px] w-[160px] ${className}`}>
      <img
        src={image}
        alt={altText}
        className="h-full w-full mb-2 object-contain" // Ajustado el tamaño de la imagen
      />
      <p className="text-white text-sm">{title}</p> {/* Cambié el tamaño del texto */}
    </div>
  );
};

export default CardTrade;
