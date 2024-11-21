import React from "react";
import imageData from '../../../../data/Profile2/imageColumn.json'

const ImageColumn: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 w-64">
      {imageData.map((image, index) => (
        <div key={index} className={`${image.height} overflow-hidden transition-transform hover:scale-105`}>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageColumn;