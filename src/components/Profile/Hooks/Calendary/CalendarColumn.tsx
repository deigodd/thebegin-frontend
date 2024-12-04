import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarColumn = () => {
    const weekDays = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'];
    
    return (
      <div className="w-full sm:w-96 mx-auto">
        <h2 className="text-4xl text-black">Calendario de</h2>
        <h2 className="text-4xl font-serif text-[#738755]">ACTIVIDADES</h2>
        <hr className="border-t-2 border-[#738755] my-4" />
        <p className="text-lg text-black mb-8 mt-3">
          Encuentra todas las actividades que tenemos disponible.
          Todos los meses sumamos clases, talleres y muchas novedades.
        </p>
        
        <div className="mb-6 flex justify-between items-center">
          <ChevronLeft className="w-8 h-8 text-[#957F74] cursor-pointer" />
          <h3 className="text-2xl font-serif text-[#957F74]">ABRIL 2024</h3>
          <ChevronRight className="w-8 h-8 text-[#957F74] cursor-pointer" />
        </div>
        
        <div className="grid grid-cols-7 gap-2 text-[#957F74]">
          {weekDays.map(day => (
            <div key={day} className="text-center text-[#957F74] py-3">
              {day}
            </div>
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="text-center py-3 text-base transition hover:bg-tbc-primarybrown-100 cursor-pointer rounded"
            >
              {i + 1}
            </div>
          ))}
        </div>
        
        <button className="mt-8 w-full bg-tbc-pilargreen-600 text-white py-3 px-6 hover:bg-tbc-pilargreen-400 transition text-lg">
          CONSULTAR
        </button>
      </div>
    );
  };

export default CalendarColumn;