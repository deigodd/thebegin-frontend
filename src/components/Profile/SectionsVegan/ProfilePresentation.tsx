//import React from 'react';
import CardPresentation from '../Hooks/CardPresentation';

const ProfilePresentation = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl w-full space-y-6">
        {/* Primera fila - Semillas (más grande) */}
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            { /* TEXTO */ }
            <CardPresentation
              title="SEMILLAS"
              content="Mis semillas son producidas con técnicas de cultivo que protegen el medio ambiente. No están tratadas con venenos, pueden ser manipuladas con tranquilidad, incluso por niños"
              bgColor="bg-tbc-pilargreen-400"
              titleTextColor="text-white"  // Color del título
              contentTextColor="text-black"  // Color del contenido
              className="h-full"
            />
          </div>
          { /* IMAGEN */}
          <div className="md:col-span-3">
            <CardPresentation
              image="https://i.pinimg.com/736x/62/e3/ea/62e3eadbe806001e338f516c88ed9aa2.jpg"
              imageAlt="Semillas y plantas pequeñas"
              className="h-full"
            />
          </div>
        </div>

        {/* Segunda fila - Hortalizas y título Orgánico */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <CardPresentation
              image="https://i.pinimg.com/736x/25/cc/b5/25ccb56715f3464ae7a9238c4b8a38e0.jpg"
              imageAlt="Preparación de vegetales"
              className="h-full"
            />
          </div>
          <div className="md:col-span-1">
            <CardPresentation
              title="HORTALIZAS Y VERDURAS"
              content="Produzco alimentos frescos y saludables, con la tranquilidad de saber que están cultivados pensando en el bienestar de todos."
              bgColor="bg-tbc-pilarbrown-200"
              titleTextColor="text-white"  // Color del título
              contentTextColor="text-black"  // Color del contenido
              className="h-full"
            />
          </div>
          <div className="md:col-span-1">
            <CardPresentation
              bgColor="bg-gray-100"
              className="h-full flex items-center justify-center"
            >
              <div className="text-center">
                <h2 className="text-5xl font-serif text-[#96B37E]">ORGÁNICO</h2>
                <span className="text-5xl font-script text-[#D4A373]">Natural</span>
              </div>
            </CardPresentation>
          </div>
        </div>

        {/* Tercera fila - Aromáticas (más pequeña) */}
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <CardPresentation
              title="AROMÁTICAS Y ESPECIAS"
              content="Cuento con una amplia variedad de aromáticas y especias."
              bgColor="bg-[#DBDFB7]"
              titleTextColor="text-[#A77F63]"  // Color del título
              contentTextColor="text-black"  // Color del contenido
              className="h-full"
            />
          </div>
          <div className="md:col-span-3">
            <CardPresentation
              image="https://i.pinimg.com/736x/9b/71/ae/9b71ae7ef28892d79040f227a4b497cf.jpg"
              imageAlt="Especias en cucharas de madera"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePresentation;
