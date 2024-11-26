//import React from 'react';
import Background from '../Hooks/BackgroundImage';
import CardPresentation from '../Hooks/CardPresentation';
import Checkbox from '../Hooks/CheckBox';
import bg from '../../../assets/backgroundProfile/newsP1_bg.jpg'

const searches = [
  "ESTOY BUSCANDO REVISTAS RETRO DE FOTOGRAFÍA",
  "¿TIENES INFO SOBRE FERIAS CERCANAS?",
  "¿ALGÚN LUGAR QUE TENGA ROPA VINTAGE?",
  "¿DÓNDE PUEDO CONSEGUIR ENTRADAS PARA EL RECITAL?",
  "¿ALGUIEN QUE ME COMENTE CÓMO PUEDO QUITARLE LA MANCHA DE ACEITE A UN JEANS?"
];

const ProfileNews = () => {
  return (
    <Background imageUrl={bg} overlayOpacity={0.6} overlayColor='black'>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container max-w-5xl px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Columna izquierda - News */}
            <CardPresentation
              title='NEWS'
              className=""
              bgColor=''
              titleTextColor="text-white"
              contentTextColor="text-white"
            >
              <ul className="space-y-7 font-serif text-xl">
                <li className="flex items-center bg-tbc-pilargray-100 space-x-3 h-16 py-2 cursor-pointer rounded-lg">
                  <span className="absolute left-11 w-6 h-6 rounded-full bg-zinc-900"></span>
                  <span className='text-black hover:text-white transition-colors'>AVISOS</span>
                </li>
                <li className="flex items-center bg-tbc-pilargray-100 space-x-3 h-16 py-2 cursor-pointer rounded-lg">
                  <span className="absolute left-11 w-6 h-6 rounded-full bg-zinc-900"></span>
                  <span className='text-black hover:text-white transition-colors'>BÚSQUEDAS</span>
                </li>
                <li className="flex items-center bg-tbc-pilargray-100 space-x-3 h-16 py-2 cursor-pointer rounded-lg">
                  <span className="absolute left-11 w-6 h-6 rounded-full bg-zinc-900"></span>
                  <span className='text-black hover:text-white transition-colors'>PEDIDOS</span>
                </li>
                <li className="flex items-center bg-tbc-pilargray-100 space-x-3 h-16 py-2 cursor-pointer rounded-lg">
                  <span className="absolute left-11 w-6 h-6 rounded-full bg-zinc-900"></span>
                  <span className='text-black hover:text-white transition-colors'>OTROS</span>
                </li>
              </ul>
            </CardPresentation>
            
            {/* Columna derecha - Búsquedas */}
            <div className="space-y-4 bg-tbc-pilargray-500 p-5 transition-transform hover:scale-105 rounded-xl">
              <h2 className="font-serif text-6xl text-white">OTROS</h2>
              <div className="">
                {searches.map((search, index) => (
                  <div 
                    key={index}
                    className=" text-white cursor-pointer hover:bg-[#7d8779] transition-colors"
                  >
                    <div className="flex items-center p-4 gap-4">
                      <div className="flex-shrink-0 w-8 px-7">
                        <Checkbox />
                      </div>
                      <span className=" ">{search}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center pt-4">
                <button className="w-1/2 font-serif text-xl border text-white p-4 hover:bg-white hover:text-black transition-colors rounded-3xl">
                  CONSULTAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default ProfileNews;