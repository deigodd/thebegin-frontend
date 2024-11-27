import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarColumnTemplate2= () => {
    const weekDays = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'];
    
    return (
      <div className="mx-12 w-96">
        <h2 className="text-4xl text-white">Calendario de</h2>
        <h2 className="text-4xl font-serif text-white w-full">ACTIVIDADES</h2>
        <hr className="border-t-2 border-white my-7" />
        <p className="text-lg text-center text-white mb-8 mt-3">
          Encuentra todas las actividades que tenemos disponible.
          Todos los meses sumamos clases, talleres y muchas novedades.
        </p>
        <hr className="border-t-2 border-white my-7" />
        
        <div className="mb-6 flex justify-between items-center">
          <ChevronLeft className="w-8 h-8 text-white cursor-pointer" />
          <h3 className="text-2xl font-serif text-white">ABRIL 2024</h3>
          <ChevronRight className="w-8 h-8 text-white cursor-pointer" />
        </div>
        
        <div className="grid grid-cols-7 gap-2 text-white">
          {weekDays.map(day => (
            <div key={day} className="text-center text-xs sm:text-lg text-white py-3 bg-[#343c3c]">
              {day}
            </div>
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="text-center py-3 text-base transition hover:bg-[#444c4c] cursor-pointer rounded"
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-full">
          <hr className="flex-grow sm:w-96 h-1 my-4 sm:my-8 bg-white border-0 " />
          <button className=" bg-black text-white py-2 px-6 hover:bg-white hover:text-black border transition text-lg rounded-3xl">
            CONSULTAR
          </button>
          <hr className="flex-grow sm:w-96 h-1 my-4 sm:my-8 bg-white border-0" />
        </div>


      </div>
    );
  };

export default CalendarColumnTemplate2;