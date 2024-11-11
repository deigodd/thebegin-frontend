import { useEffect, useState } from "react";
import PilarNav from './PilarMarketNav'
import PilarImage from './PilarMarketImage'
import MarketProducts from '../MarketProduts'

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

interface Product {
  id: number;
  title: string;
  price: number;
  trueque?: boolean;
  image: string;
  discount?: number;
  description?: string;
}

interface PilarTemplateProps {
  pilarId: number;
}

const PilarTemplate: React.FC<PilarTemplateProps> = ({pilarId}) => {
  
  const [pilarData, setPilarData] = useState<PilarData | null>(null);

  useEffect(() => {
    const fetchPilarData = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/deigodd/thebegin-frontend/refs/heads/develop/src/data/Pilres.json`);
        const data = await response.json();
        // Buscar el pilar que coincide con el id proporcionado (pilarId)
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
    <div className="w-full max-w-7xl mx-auto p-4 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
      <PilarImage id={pilarData.id} name={pilarData.name} image={pilarData.image} colors={pilarData.colors}/>
        <div className="md:w-3/4">
            <PilarNav colors={pilarData.colors}/>
            <MarketProducts/>
        </div>
      </div>
    </div>
  )
}
export default PilarTemplate;