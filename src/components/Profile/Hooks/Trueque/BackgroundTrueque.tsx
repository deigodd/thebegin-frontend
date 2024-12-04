import React from 'react';

interface BackgroundTruequeProps {
  className?: string;
}

const BackgroundTrueque: React.FC<BackgroundTruequeProps> = ({ className = '' }) => {
  return (
    <div 
      className={`w-full h-48 sm:h-64 bg-[#B2A090] rounded-3xl ${className}`}
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    ></div>
  );
};

export default BackgroundTrueque;
