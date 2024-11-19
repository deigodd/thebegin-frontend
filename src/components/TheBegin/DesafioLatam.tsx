// components/InfoCard.tsx
import React from "react";
import latamVideo from "../../assets/Home/latam.mp4";

const DesafioLatam: React.FC = () => {
  const title: string = "Juntas seamos protagonistas del cambio.";
  const content: string =
    "Para alcanzar a cubrir la mayor cantidad de mujeres e inquietudes diversas que enriquezcan nuestra comunidad, es relevante llegar a todas las mujeres de Latinoamérica, posibilitando la construcción de este espacio inclusivo y colaborativo, que será el epicentro donde las mujeres no sólo se conectarán, sino también compartirán experiencias, creemos una red de apoyo única.";

  return (
    <div className="flex items-center bg-white cursor-pointer overflow-hidden">
      <video
        src={latamVideo}
        loop
        autoPlay
        muted
        className="w-full h-full object-cover"
      ></video>
      <div className="p-12">
        <h2 className="text-4xl font-serif font-bold text-tbc-primarybrown-500 mb-4">
          {title}
        </h2>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default DesafioLatam;
