import { useEffect, useState } from "react";
import PilarImage from './PilarMarketImage'
import PilarMarketProducts from '../Pilares Market/PilarProduts'

interface PilarData {
  id: number;
  name: string;
  image: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

interface PilarTemplateProps {
  pilarId: number;
}

const PilarTemplate: React.FC<PilarTemplateProps> = ({pilarId}) => {
  
  const [pilarData, setPilarData] = useState<PilarData | null>(null);

  useEffect(() => {
    const fetchPilarData = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/deigodd/thebegin-frontend/refs/heads/feature/Products/src/data/Pilres.json`);
        const data = await response.json();
        const pilar = data.pilares.find((p: PilarData) => p.id === pilarId);
        setPilarData(pilar || null);
      } catch (error) {
        console.error("Error al cargar datos del pilar:", error);
      }
    };

    fetchPilarData();
  }, [pilarId]);

  if (!pilarData) {
    return <p>Cargando datos...</p>;
  }


  return (
    <div id={pilarData.name.toLowerCase().replace(/\s+/g, '-')} className="w-full space-y-4">
      <div className="flex flex-col md:flex-row gap-1">
      <span>
      <PilarImage pilar={pilarData}/>
      </span>
        <div className="grow">
            <PilarMarketProducts pilarId={pilarData.id} colors={pilarData.colors}/>
        </div>
      </div>
    </div>
  )
}
export default PilarTemplate;