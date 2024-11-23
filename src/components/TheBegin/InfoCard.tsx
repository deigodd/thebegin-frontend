// components/InfoCard.tsx
import React from "react";
import imagePath from "../../assets/Home/hands.jpg";

interface InfoCardProps {
  title: string;
  onClick: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex scale-95 items-center bg-white cursor-pointer hover:bg-gray-100 shadow-md transition overflow-hidden"
    >
      <img src={imagePath} alt={title} className="h-32 w-40" />
      <span className="p-2 text-3xl text-center mx-auto font-serif font-semibold text-gray-800">
        {title}
      </span>
    </div>
  );
};

export default InfoCard;
