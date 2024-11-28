import ConsultForm from "../Hooks/Projects/ConsultForm";
import ColumnWorkshops from "../Hooks/Projects/ColumnWorkshops";
import { imageGeneral, ImageCategory } from "@/types/imageGeneral";

const ProfileProject = () => {

  const getImage = (category: ImageCategory) => {
    return imageGeneral[category].imageUrl;
  };

  const getAltText = (category: ImageCategory) => {
    return imageGeneral[category].altText;
  };

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
        <div className="relative flex items-center justify-center mt-28">
          <img
            src={getImage("projects")}
            alt={getAltText("projects")}
            className="w-full h-[700px] object-cover"
          />
        </div>

        {/* Columna de Talleres */}
        <div className="mt-16">
          <ColumnWorkshops />
        </div>
        
      </div>

      {/* Línea Verde Inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-tbc-pilargreen-600" />
    </div>
    </div>
    
  );
};

export default ProfileProject;