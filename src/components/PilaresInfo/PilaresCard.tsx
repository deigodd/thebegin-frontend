import React, { useState } from "react";

interface PilaresCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: string;
  info:string;
}

const defaultDescription =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vitae quidem optio animi eum voluptatibus, obcaecati accusamus deserunt aliquam debitis nisi provident ullam pariatur illum eligendi at, quia blanditiis eveniet.";

const PilaresCard: React.FC<PilaresCardProps> = ({
  title,
  description,
  imageSrc,
  icon,
  info,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      {/* Tarjeta principal */}
      <div
        className="bg-white border border-gray-200 rounded-lg shadow w-full lg:w-auto mx-auto flex flex-col h-full cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg"
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
      <div
        className={`transition-all overflow-hidden w-full ${
          isExpanded ? "max-h-96 p-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 p-5 rounded-lg shadow-md">
          <p className="text-gray-700">
            {info || defaultDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PilaresCard;






