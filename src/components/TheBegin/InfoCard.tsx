// components/InfoCard.tsx
import React from "react";

interface InfoCardProps {
  title: string;
  imagePath: string;
  onClick: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, imagePath, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex scale-95 items-center bg-white cursor-pointer hover:bg-gray-100 shadow-md transition overflow-hidden"
    >
      <img src={imagePath} alt={title} className="h-32 w-40" />
      <span className="p-2 sm:text-2xl text-center mx-auto font-serif font-semibold text-tbc-primarybrown-500">
        {title}
      </span>
    </div>
  );
};

export default InfoCard;
