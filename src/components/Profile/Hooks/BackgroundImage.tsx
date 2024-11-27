import React from 'react';
import BackgroundPic from '../../../assets/backgroundProfile/vegetables-1892900_1920.jpg';

interface BackgroundProps {
  children: React.ReactNode;
  imageUrl?: string;
  overlayOpacity?: number;  // Opacidad de la capa de superposición
  overlayColor?: 'black' | 'white';  // Color de la capa de superposición
}

const BackgroundImage = ({ children, imageUrl = BackgroundPic, overlayOpacity = 0.5, overlayColor = 'black' }: BackgroundProps) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div 
        className={`absolute inset-0 ${overlayColor === 'black' ? 'bg-black' : 'bg-white'}`} 
        style={{ opacity: overlayOpacity }}  // Modificando la opacidad aquí
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
