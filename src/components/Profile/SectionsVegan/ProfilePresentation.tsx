import CardPresentation from '../Hooks/CardPresentation';
import React from 'react';
import presentationType from '@/types/presentationTypes';

//Reemplazado contenido para que se reemplace en presentationTypes.ts

const ProfilePresentation: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl w-full space-y-6">
      <div className="grid md:grid-cols-5 gap-6">
  {/* Primera fila */}
  {/* Primera columna: Card de texto */}
  <div className="md:col-span-2 h-64 flex">
    <CardPresentation
      title={presentationType[0].title}
      content={presentationType[0].content}
      bgColor={presentationType[0].bgColor}
      titleTextColor={presentationType[0].titleTextColor}
      contentTextColor={presentationType[0].contentTextColor}
      className="w-full h-full flex flex-col justify-center"
    />
  </div>

  {/* Segunda columna: Imagen */}
  <div className="md:col-span-3 h-64 flex">
    <img
      src={presentationType[1].image}
      alt={presentationType[1].imageAlt}
      className="w-full h-full object-cover transition-transform hover:scale-105"
    />
  </div>
</div>

{/* Segunda fila */}
<div className="grid md:grid-cols-3 gap-6">
  {/* Imagen */}
  <div className="h-64 flex">
    <img
      src={presentationType[2].image}
      alt={presentationType[2].imageAlt}
      className="w-full h-full object-cover transition-transform hover:scale-105"
    />
  </div>

  {/* Card de texto */}
  <div className="h-64 flex">
    <CardPresentation
      title={presentationType[3].title}
      content={presentationType[3].content}
      bgColor={presentationType[3].bgColor}
      titleTextColor={presentationType[3].titleTextColor}
      contentTextColor={presentationType[3].contentTextColor}
      className="w-full h-full flex flex-col justify-center"
    />
  </div>

  {/* Card de texto adicional */}
  <div className="h-64 flex justify-center">
    <CardPresentation
      bgColor={presentationType[4].bgColor}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="text-center">
        <h2 className="text-5xl font-serif text-[#96B37E]">{presentationType[4].content}</h2>
        <span className="text-5xl font-script text-[#D4A373]">Natural</span>
      </div>
    </CardPresentation>
  </div>
</div>

{/* Tercera fila */}
<div className="grid md:grid-cols-5 gap-6">
  {/* Primera columna: Card de texto */}
  <div className="md:col-span-2 h-64 flex">
    <CardPresentation
      title={presentationType[5].title}
      content={presentationType[5].content}
      bgColor={presentationType[5].bgColor}
      titleTextColor={presentationType[5].titleTextColor}
      contentTextColor={presentationType[5].contentTextColor}
      className="w-full h-full flex flex-col justify-center "
    />
  </div>

  {/* Segunda columna: Imagen */}
  <div className="md:col-span-3 h-64 flex">
    <img
      src={presentationType[6].image}
      alt={presentationType[6].imageAlt}
      className="w-full h-full object-cover transition-transform hover:scale-105"
    />
  </div>
</div>
</div>

    </section>
  );
};

export default ProfilePresentation;