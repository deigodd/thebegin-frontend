import React from 'react';
import BackgroundPic from '../../../assets/backgroundProfile/vegetables-1892900_1920.jpg'

interface BackgroundProps {
  children: React.ReactNode;
  imageUrl?: string;
  className?: string;
}

const BackgroundImage = ({ children, imageUrl }: BackgroundProps) => {
  const imageToUse = imageUrl || BackgroundPic; // Si se pasa un imageUrl, usa ese, sino usa la imagen local.
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageToUse})` }} //URL imagen
      />
      <div className="absolute inset-0 bg-white/30" />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;