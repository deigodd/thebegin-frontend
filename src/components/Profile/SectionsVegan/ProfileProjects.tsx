//import React from "react";
import ConsultForm from "../Hooks/ConsultForm";
import WorkshopCard from "../Hooks/WorkshopCard";

interface Workshop {
  id: number;
  title: string;
}

const ColumnWorkshops = () => {
  const workshops: Workshop[] = [
    { id: 1, title: 'Taller de compost y compostaje' },
    { id: 2, title: 'Taller de conducción y poda en frutales' },
    { id: 3, title: 'Taller de riego' },
    { id: 4, title: 'Taller calendario de siembra' },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-[#2C4A3B] text-3xl font-serif mb-6">Talleres Verdes</h2>
      <div className="space-y-3">
        {workshops.map((workshop) => (
          <WorkshopCard key={workshop.id} {...workshop} />
        ))}
      </div>
    </div>
  );
};

const ProfileProject = () => {
  return (
    <div className="bg-[#FBF4EC]">
      <div className="relative min-h-screen pb-8 py-10">
      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna de Consultas */}
        <div className="space-y-6 mt-16">
          <div>
            <h2 className="text-[#2C4A3B] text-3xl font-serif mb-2">¿Porqué tener una huerta?</h2>
            <p className="text-gray-700 text-xl ">
              Es una forma sana, natural y económica de producir alimentos sanos durante todo el año.
            </p>
          </div>
          <ConsultForm />
        </div>

        {/* Columna de Imagen */}
        <div className="relative flex items-center justify-center mt-16">
          <img
            src="https://i.pinimg.com/736x/9f/de/67/9fde671de96337f60fb79ab575e7acd3.jpg"
            alt="Vegetales frescos"
            className="w-full h-[700px] object-cover "
          />
        </div>

        {/* Columna de Talleres */}
        <div className="mt-16">
          <ColumnWorkshops />
        </div>
        
      </div>

      {/* Línea Verde Inferior */}
      <div className="absolute left-0 w-2/3 bg-[#AEBA9B]" />
    </div>
    </div>
    
  );
};

export default ProfileProject;