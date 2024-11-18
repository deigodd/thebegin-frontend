import React from "react";

interface CommunitySectionCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const CommunitySectionCard: React.FC<CommunitySectionCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <>
      <div className="flex border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden h-40 w-3/4 max-w-md">
        <div className="w-2/5 h-full">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-3/5 p-4 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </>
  );
};

export default CommunitySectionCard;
