import React from 'react';
import BackgroundPic from '../../../assets/backgroundProfile/vegetables-1892900_1920.jpg'

interface BackgroundProps {
  children: React.ReactNode;
  imageUrl?: string;
}

const BackgroundImage = ({ children, imageUrl = BackgroundPic }: BackgroundProps) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 h-full"> {/* Limit the height */}
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;