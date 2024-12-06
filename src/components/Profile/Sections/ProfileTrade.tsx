
import { Link } from 'react-router-dom'; // Importa Link para redirección
import cinta from '../../../assets/adhesive2.png';
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
  { id: 1, title: "", image: "https://images.unsplash.com/photo-1553984658-d17e19aa281a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "", image: "https://img1.wallspic.com/previews/6/6/1/5/7/175166/175166-coche-lomografia-capucha-lente_de_la_camara-iluminacion_automotriz-x750.jpg" },
  { id: 3, title: "", image: "https://images.unsplash.com/photo-1508285296015-c0b524447532?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "", image: "https://images.unsplash.com/photo-1589695900288-dde3e1b4c9b9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "", image: "https://images.unsplash.com/photo-1488241561087-799714b46586?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, title: "", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, title: "", image: "https://images.unsplash.com/photo-1653078695581-741f61bbfdf5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, title: "", image: "https://images.unsplash.com/photo-1510574457807-3d9bf494ff6b?q=80&w=1401&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, 
  { id: 9, title: "", image: "https://images.unsplash.com/photo-1725033797039-9d7db36e96f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVyZGUlMjBlc21lcmFsZGF8ZW58MHx8MHx8fDA%3D" }, 
  { id: 10, title: "", image: "https://images.unsplash.com/photo-1620248410823-9060cd5a5dcb?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, 
  { id: 11, title: "VER MÁS", image: "" }, // La última "tarjeta" será un botón
];

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

