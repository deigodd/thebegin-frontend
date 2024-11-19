import React from 'react';
import cinta from '../../../assets/adhesive2.png';
import CardTrade from '../Hooks/CardTrade';

const cardData = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
  { id: 6, title: "Card 6" }, // Tarjeta extra para el segundo div
];

// Dividir los datos en dos partes
const cardDataTop = cardData.slice(0, 5); // Primer div con 5 tarjetas
const cardDataBottom = cardData.slice(0, 4); // Segundo div con 4 tarjetas


const ProfileTrade = () => {
  // Datos de las tarjetas

  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-500">
      <div className="flex bg-[#28282b] relative items-center justify-center p-6 h-screen w-screen text-white">
        
        {/* Sección no modificada */}
        <div className="flex relative bottom-0 bg-[#46484a] p-6 mb-1 rounded-t-full justify-center text-center h-[825px] w-[355px] md:h-[700px] lg:h-[570px] 2xl:h-[755px]">
          <h2 className="absolute top-12 text-4xl">TRUEQUE</h2>
          <p className="absolute top-[100px] text-xl px-4">
            Visita mi página y conoce mis propuestas de intercambio
          </p>
        </div>

        {/* Otro contenedor que tampoco se modifica */}
        <div className="flex absolute items-center justify-center top-9 h-16 w-48">
          <img
            src={cinta}
            alt="cinta"
            className="h-12 w-48"
          />
        </div>

        {/* Primer contenedor con 5 tarjetas */}
        <div className="absolute flex flex-row items-center justify-center text-white p-3 rounded-lg h-[170px] w-11/12 bottom-[195px] space-x-4">
          {cardDataTop.map((card) => (
            <CardTrade 
              key={card.id}
              image={cinta} // Ruta de la imagen
              title={card.title}
              altText="Cinta adhesiva"
            />
          ))}
        </div>

        {/* Segundo contenedor con 4 tarjetas */}
        <div className="absolute flex flex-row items-center justify-center text-white p-3 rounded-lg h-[170px] w-4/5 bottom-[15px] space-x-4">
          {cardDataBottom.map((card) => (
            <CardTrade 
              key={card.id}
              image={cinta} // Ruta de la imagen
              title={card.title}
              altText="Cinta adhesiva"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProfileTrade;
