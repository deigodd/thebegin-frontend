
import { Link } from 'react-router-dom'; // Importa Link para redirección
import cinta from '../../../assets/adhesive2.png';
import img1 from '../../../assets/img1_TradeP1.jpg';
import img2 from '../../../assets/img2_TradeP1.jpg';
import img3 from '../../../assets/img3_TradeP1.jpg';
import img4 from '../../../assets/img4_TradeP1.jpg';
import img5 from '../../../assets/img5_TradeP1.jpg';
import img6 from '../../../assets/img6_TradeP1.jpg';
import img7 from '../../../assets/img7_TradeP1.jpg';
import img8 from '../../../assets/img8_TradeP1.jpg';
import img9 from '../../../assets/img9_TradeP1.jpg';
import img10 from '../../../assets/img10_TradeP1.jpg';
import CardTrade from '../Hooks/CardTrade';
import Background from '../Hooks/BackgroundImage';
import bg from '../../../assets/backgroundProfile/bgContactP1.jpg';

// Definir el tipo para las tarjetas
interface Card {
  id: number;
  title: string;
  image?: string; // La propiedad de imagen es opcional
}

const cardData: Card[] = [
  { id: 1, title: "", image: img1 },
  { id: 2, title: "", image: img2 },
  { id: 3, title: "", image: img3 },
  { id: 4, title: "", image: img4 },
  { id: 5, title: "", image: img5 },
  { id: 6, title: "", image: img6 },
  { id: 7, title: "", image: img7 },
  { id: 8, title: "", image: img8 }, // La última "tarjeta" será un botón
  { id: 9, title: "", image: img9 }, // La última "tarjeta" será un botón
  { id: 10, title: "", image: img10 }, // La última "tarjeta" será un botón
  { id: 11, title: "VER MÁS", image: "" }, // La última "tarjeta" será un botón
];

// Componente para las tarjetas con scroll horizontal
// Componente para las tarjetas con scroll horizontal
const CardSection = ({ cardData, bottomPosition, customClass }: { cardData: Card[], bottomPosition: string, customClass?: string }) => (
  <div
    className={`absolute flex flex-row gap-5 items-center text-white w-11/12 h-[255px] ${bottomPosition} lg:h-[220px] 2xl:h-[410px] overflow-x-auto whitespace-nowrap space-x-4 ${customClass}`}
  >
    {cardData.map((card) =>
      card.title === "VER MÁS" ? (
        <Link key={card.id} to="/otra-pagina"> {/* Redirige a otra página */}
          <div
            className="flex flex-col items-center justify-center p-4 text-center 
            h-[250px] w-[250px] flex-none 
            lg:h-[210px] lg:w-[210px]"
          >
            <button className="text-white text-lg border hover:bg-white hover:text-black hover:scale-105 transition rounded-3xl w-full h-10">{card.title}</button> {/* Solo el texto */}
          </div>
        </Link>
      ) : (
        <CardTrade
          key={card.id}
          image={card.image || ""}
          title={card.title}
          altText={`Image for ${card.title}`}
          className='hover:scale-105 transition'
        />
      )
    )}
  </div>
);

const ProfileTrade = () => {
  const cardDataTop = cardData.slice(0, 6); // Primer div con 6 tarjetas
  const cardDataBottom = cardData.slice(6, 11); // Segundo div con 5 tarjetas

  return (
    <Background imageUrl={bg}>
      <section className="flex items-center justify-center pt-10">
        <div className="flex relative items-center justify-center h-screen w-screen text-white">
          <div className="flex relative flex-col items-center justify-center h-screen w-screen">
            <div className="flex absolute bottom-0 bg-[#46484a] p-6 rounded-t-full justify-center text-center h-screen w-80">
              <h2 className="absolute top-12 text-4xl">TRUEQUE</h2>
              <p className="absolute top-[100px] text-xl px-4">
                Visita mi página y conoce mis propuestas de intercambio
              </p>
            </div>
            <div className="absolute items-center justify-center top-0 h-16 w-48">
              <img src={cinta} alt="cinta" className="h-12 w-48" />
            </div>
          </div>

          {/* Primer contenedor con scroll horizontal */}
          <CardSection
            cardData={cardDataTop}
            bottomPosition="bottom-[300px] lg:bottom-[240px] 2xl:bottom-[400px]"
            customClass="2xl:justify-center"
          />

          {/* Segundo contenedor con scroll horizontal */}
          <CardSection
            cardData={cardDataBottom}
            bottomPosition="bottom-[20px] 2xl:bottom-[70px]"
            customClass="lg:justify-center"
          />
        </div>
      </section>
    </Background>
  );
};

export default ProfileTrade;

