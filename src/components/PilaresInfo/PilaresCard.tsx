import React, { useState } from "react";
import { motion } from "framer-motion";

interface PilaresCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: string;
  info: string;
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
    <div className="relative flex flex-col items-center w-full sm:w-auto pt-4 pb-4"> {/* Padding top y bottom */}
      {/* Tarjeta principal */}
      <div
        className="bg-white border border-gray-200 rounded-lg shadow w-full max-w-sm mx-auto flex flex-col h-full cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg sm:mx-2"
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
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isExpanded
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden w-full"
      >
        <div className="bg-tbc-secondarygray-100/90 p-5 rounded-lg shadow-md">
          <p className="text-gray-700">{info || defaultDescription}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PilaresCard;








