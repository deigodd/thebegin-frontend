import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "flowbite-react";

interface PilarMarketNavProps {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const PilarMarketNav: React.FC<PilarMarketNavProps> = ({ colors, currentPage, totalPages, onPrevPage, onNextPage }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mb-2 px-2" style={{ background: colors.primary }}>
      <div
        className="flex gap-2 text-white h-auto p-1 overflow-x-auto flex-nowrap rounded-lg"
        style={{ backgroundColor: colors.primary }}
      >
        <button
          className="px-4 py-2 rounded-lg focus:outline-none"
          style={{ backgroundColor: colors.primary }}
        >
          ÚLTIMOS PRODUCTOS
        </button>
        <button
          className="px-4 py-2 text-white hover:bg-opacity-75 focus:outline-none rounded-lg"
          style={{ backgroundColor: colors.secondary }}
        >
          DESTACADOS
        </button>
        <button
          className="px-4 py-2 text-white hover:bg-opacity-75 focus:outline-none rounded-lg"
          style={{ backgroundColor: colors.tertiary }}
        >
          MÁS VISITADOS
        </button>
      </div>

      <div className="flex items-center gap-2 m-2">
        <Button className="bg-white rounded-full" size="xs" aria-label="Previous page" onClick={onPrevPage}>
          <ChevronLeft className="h-6 w-6" strokeWidth={5} style={{ color: colors.primary }} />
        </Button>
        
        {/* Mostrar el número de página */}
        <span className="text-sm font-semibold" style={{ color: "white" }}>
          {currentPage} / {totalPages}
        </span>
        
        <Button className="bg-white rounded-full" size="xs" aria-label="Next page" onClick={onNextPage}>
          <ChevronRight className="h-6 w-" strokeWidth={5} style={{ color: colors.primary }} />
        </Button>
      </div>
    </div>
  );
};

export default PilarMarketNav;
