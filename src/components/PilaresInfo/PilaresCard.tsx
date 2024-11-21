import React, { useState } from "react";

interface PilaresCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: string;
}

const defaultDescription =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vitae quidem optio animi eum voluptatibus, obcaecati accusamus deserunt aliquam debitis nisi provident ullam pariatur illum eligendi at, quia blanditiis eveniet.";

const PilaresCard: React.FC<PilaresCardProps> = ({
  title,
  description,
  imageSrc,
  icon,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative flex flex-col h-full w-full items-center">
      {/* Tarjeta principal */}
      <div
        className="bg-white border border-gray-200 rounded-lg shadow w-full lg:w-auto mx-auto flex flex-col h-full cursor-pointer"
        onClick={toggleExpand}
      >
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={imageSrc}
          alt={title}
        />
        <div className="flex-grow p-5 flex flex-col justify-between items-center text-center">
          <h3 className="text-4xl font-serif text-tbc-primarybrown-400">
            {title}
          </h3>
          <div className="flex-grow flex items-center justify-center">
            <p className="text-gray-700">{description || defaultDescription}</p>
          </div>
        </div>
        <div className="flex justify-center items-center p-4">
          <img className="w-7 h-7" src={icon} alt={title} />
        </div>
      </div>

      {/* Contenido expandible */}
      {isExpanded && (
        <div className="absolute top-full w-full bg-white border border-gray-200 rounded-lg shadow p-4 mt-4">
          <p className="text-gray-700 text-center">
            {defaultDescription}
          </p>
        </div>
      )}
    </div>
  );
};

export default PilaresCard;





