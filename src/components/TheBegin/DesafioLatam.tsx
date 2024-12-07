// components/InfoCard.tsx
import React from "react";
import latamVideo from "../../assets/Home/latam.mp4";

const DesafioLatam: React.FC = () => {
  const title: string = "Juntas seamos protagonistas del cambio.";
  const content: string =
    "Buscamos involucrar a más de 300 millones de mujeres en América Latina, especialmente a artistas y creativas, en una comunidad donde puedan mostrar sus procesos y resultados creativos. Nuestro objetivo es incluir a todas las mujeres que trabajan en sectores creativos y artísticos, sin restricción por edad, credo, identidad social, nacionalidad o cualquier categoría demográfica. Deseamos reflejar la diversidad y ofrecer una plataforma que facilite el contacto y la conexión entre mujeres que, de otro modo, no tendrían la oportunidad de interactuar. A través de esta plataforma y los festivales asociados, escalaremos y amplificaremos el trabajo individual y colectivo de las mujeres creativas, aumentando las oportunidades y generando intercambios significativos dentro de la comunidad.";

    return (
      <div className="lg:flex items-center bg-white cursor-pointer overflow-hidden">
        {/* Contenedor del video */}
        <div className="relative lg:w-2/3 flex-grow">
          <video
            src={latamVideo}
            loop
            autoPlay
            muted
            className="object-cover w-full h-full"
          ></video>
        </div>
  
        {/* Contenedor del texto */}
        <div className="px-12 py-12 text-justify lg:w-2/3 mt-4 lg:py-0 lg:mt-0">
          <h2 className="text-2xl font-serif font-bold text-tbc-primarybrown-500 mb-4">
            {title}
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
        </div>
      </div>
    );
  };
  
  export default DesafioLatam;