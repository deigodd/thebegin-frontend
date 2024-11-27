interface WorkshopCardProps {
    id: number;
    title: string;
  }
  
  //Estructura de los workshops
  const WorkshopCard = ({ id, title }: WorkshopCardProps) => {
    return (
      <div className="bg-[#C7DFC3] p-4 hover:translate-x-1 transition-all duration-300 cursor-pointer">
        <div className="flex items-center gap-4">
          <span className="text-white text-2xl font-semibold">
            {id.toString().padStart(2, '0')}
          </span>
          <h3 className="text-[#2C4A3B] text-lg">
            {title}
          </h3>
        </div>
      </div>
    );
  };

export default WorkshopCard;