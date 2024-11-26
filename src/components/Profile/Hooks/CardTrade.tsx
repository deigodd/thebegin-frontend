import React from 'react';

type CardTradeProps = {
  image: string;    // Ruta de la imagen
  title: string;    // Título de la tarjeta
  altText: string;  // Texto alternativo para la imagen
  className?: string; // Clases adicionales para personalización
};

const CardTrade = ({ image, title, altText, className }: CardTradeProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-4 text-center 
        h-[250px] w-[250px] flex-none 
        lg:h-[205px] lg:w-[205px] 2xl:h-[280px] 2xl:w-[280px] relative ${className}`}
    >
      <img
        src={image}
        alt={altText}
        className="absolute top-0 left-0 h-full w-full object-cover"  // Aquí aseguramos que la imagen ocupe toda la tarjeta
      />
      <div className="relative z-10">
        <p className="text-white text-sm">{title}</p>
      </div>
    </div>
  );
};

export default CardTrade;
