import React from 'react';

interface BackgroundImageProps {
  imageUrl: string;
  overlay?: boolean;
  overlayOpacity?: string;
  children?: React.ReactNode;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  overlay = true,
  overlayOpacity = "30",
  children
}) => {
  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className={`absolute inset-0 bg-black/${overlayOpacity}`} />
        )}
      </div>
      {children}
    </div>
  );
};