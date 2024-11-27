import WorkshopCard from "./WorkshopCard";

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
  
export default ColumnWorkshops;