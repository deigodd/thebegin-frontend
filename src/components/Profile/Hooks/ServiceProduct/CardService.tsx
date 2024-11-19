import React from 'react';

interface CardServiceProps {
  title: string;
  image: string;
}

const CardService: React.FC<CardServiceProps> = ({ title, image }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-[#ECE4D8] transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img className="w-full h-64 object-cover" src={image} alt={title} />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-tbc-pilargreen-600 mb-2">{title}</h2>
      </div>
    </div>
  );
};

export default CardService;
