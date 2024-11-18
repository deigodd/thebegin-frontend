import PilarTemplate from '../../components/Marketplace/Pilares Market/PilarTemplate';
import PilarTemplate2 from '../../components/Marketplace/Pilares Market/PilarTemplate2';
import TheBeginMarketProducts from '../../components/Marketplace/TheBeginMarketProducts'

interface ChangingViewProps{
    selectedPilar: string
}

const ChangingView: React.FC<ChangingViewProps> = ({selectedPilar}) => {

  return (

              <div className='z-10 mt-2'>
                {selectedPilar === "The Begin" && <TheBeginMarketProducts selectedCategory={777}/>}
                {selectedPilar === "Arte con Sentido" && <PilarTemplate pilarId={1} />}
                {selectedPilar === "Consumo con Sentido" && <PilarTemplate2 pilarId={2} />}
                {selectedPilar === "Bienestar" && <PilarTemplate pilarId={3} />}
                {selectedPilar === "Salud Mental" && <PilarTemplate2 pilarId={4} />}
                {selectedPilar === "Medio Ambiente" && <PilarTemplate pilarId={5} />}
                {!["The Begin", "Arte con Sentido", "Consumo con Sentido", "Bienestar", "Salud Mental", "Medio Ambiente"].includes(selectedPilar) && (
                    <TheBeginMarketProducts selectedCategory={777}/>
                )}
              </div>         

  );
};

export default ChangingView;
