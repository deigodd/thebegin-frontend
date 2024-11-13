import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "flowbite-react"

interface PilarMarketNavProps {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

const PilarMarketNav: React.FC<PilarMarketNavProps> = ({ colors }) => {
  return (
    <div className="flex items-center justify-between mb-4 px-2" style={{background: colors.primary}}>
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
      <div className="flex gap-2">
        <Button className="bg-white rounded-full" size="xs" aria-label="Previous page">
          <ChevronLeft className="h-6 w-6" strokeWidth={5} style={{color: colors.primary}} />
        </Button>
        <Button className="bg-white rounded-full" size="xs" aria-label="Next page">
          <ChevronRight className="h-6 w-" strokeWidth={5} style={{color: colors.primary}}/>
        </Button>
      </div>
    </div>
  );
};

export default PilarMarketNav;