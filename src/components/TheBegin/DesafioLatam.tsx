// components/InfoCard.tsx
import React from "react";
import latamVideo from "../../assets/Home/latam.mp4";

const DesafioLatam: React.FC = () => {
  const title: string = "Juntas seamos protagonistas del cambio.";
  const content: string =
    "Queremos Alcanzar a la gran mayoría de esas más de 300 millones de mujeres en América Latina se involucre es esta comunidad, especialmente aquellas artistas y creativas en general, o aquellas mujeres que hayan desarrollado procesos creativos y quieran mostrar los bellos y significativos resultados de estos. Apostamos a que todas las mujeres latinoamericanas que trabajan en sectores creativos y/o artísticos, sin importar edad, credo, identidad social, nacionalidad, nivel de escolaridad, estado civil y cualquier otro tipo de categoría demográfica. Queremos reflejar la diversidad de esta comunidad, al mismo tiempo que ofrecemos una plataforma que permite el contacto, la búsqueda de coincidencias y puntos en común entre mujeres que, de otro modo, no habrían podido contactarse y, menos aún, concretar un encuentro. La plataforma y el festivales que tiene asociados, permitirá escalar y amplificar el trabajo individual y colectivo de las mujeres creativas y artistas de Latinoamérica, conformando una comunidad con alcances e impacto inconmensurables. Esta propuesta permite que cualquier mujer interesada ingrese sus datos, cree un perfil y elabore un portafolio de calidad, que podrá ser visto por mujeres de toda América Latina. Esto permite tener un universo enorme de oportunidades creadas por y para mujeres, al mismo tiempo de generar las condiciones para que se produzca un número inconmensurable de intercambios, interacciones y transacciones entre las mujeres de la comunidad. ";

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
