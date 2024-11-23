import TruequeProducts from './TruequeProduts'

interface ChangingViewProps{
    selectedPilar: string
    selectedCategory: string | null
}

const ChangingView: React.FC<ChangingViewProps> = ({selectedPilar, selectedCategory}) => {

  return (

              <div className='z-10 mt-2'>
                {selectedPilar === "The Begin" && <TruequeProducts selectPil={777} selectCat={selectedCategory}/>}
                {selectedPilar === "Arte con Sentido" && <TruequeProducts selectPil={1} selectCat={selectedCategory}/>}
                {selectedPilar === "Consumo con Sentido" && <TruequeProducts selectPil={2} selectCat={selectedCategory}/>}
                {selectedPilar === "Bienestar" && <TruequeProducts selectPil={3} selectCat={selectedCategory}/>}
                {selectedPilar === "Salud Mental" && <TruequeProducts selectPil={4} selectCat={selectedCategory}/>}
                {selectedPilar === "Medio Ambiente" && <TruequeProducts selectPil={5} selectCat={selectedCategory}/>}
                {!["The Begin", "Arte con Sentido", "Consumo con Sentido", "Bienestar", "Salud Mental", "Medio Ambiente"].includes(selectedPilar) && (
                    <TruequeProducts selectPil={0} selectCat={selectedCategory}/>
                )}
              </div>         
  );
};

export default ChangingView;
