import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import PageSeparator from '../components/PageSeparator';
import PilaresCard from "../components/PilaresInfo/PilaresCard";
import imageTemp from "../assets/Home/pd21-34-07-kwan-a-1.jpg";
import iconCard from "../assets/icons/tb-icon-fill-lightBrown.png";
import Match from "../components/Match/Match";
import Banner from "../components/Match/Banner";
import  {SearchBar2} from "../components/SearchBar/Bar2";
import { ActivityHeader } from "../components/Match/ActivityHeader";
import backgroundImage from "../assets/background-home.svg";
import videoPilares from "../assets/Pilares/pilares_720p.mp4";

const Pilares: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Aqui verificamos si hay token, despúes hay que implementar para validar si el token esta vigente -> TO-DO
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const [isNavbarFixed, setIsNavbarFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const videoHeight =
        document.getElementById("pilaresvideo")?.clientHeight || 0;
      if (window.scrollY > videoHeight) {
        setIsNavbarFixed(false);
      } else {
        setIsNavbarFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
    
    <div className='flex flex-col min-h-screen'
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className={`fixed-navbar ${!isNavbarFixed ? "hidden-navbar" : ""}`}>
        <Navbar />
      </div>

      <div className="relative bg-white border border-gray-200 mt-10 mb-10 h-auto pt-20 flex flex-wrap">
          <video
          src={videoPilares}
          autoPlay
          muted
          loop
          className="w-full md:w-1/2 h-64 md:h-full object-cover"
        ></video>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center pl-6 md:pl-16 pr-6 md:pr-12 py-6">
            <h1 className="text-tbc-primarybrown-400 text-3xl md:text-5xl font-serif font-semibold mb-4 md:mb-6">
              Nuestros Pilares
            </h1>
            <p className="text-black text-sm md:text-lg leading-relaxed">
              Nuestra plataforma como es un match colaborativo que destaca por su asertividad principal basada en coincidencias. Nos referimos específicamente al match centrado en elementos como profesión u ocupación, modelos de negocio, intereses particulares y necesidades de información y preferencias de interacción específicas.
            </p>
          </div>
        </div>

        <PageSeparator title="Conócelos" />

        <div
  className="flex justify-center items-center mx-auto w-full max-w-7xl min-w-[320px] min-h-[760px] h-auto lg:mt-4 pt-1 pb-4 space-y-2"
>
  {/* Contenedor de las tarjetas */}
  <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center items-center px-4">
    <PilaresCard
      title="Arte con sentido"
      description="El amor se pinta, se teje, se esculpe y se canta"
      imageSrc={imageTemp}
      icon={iconCard}
      info="
          Pintura, 
          Escultura, 
          Dibujo, 
          Grabado, 
          Fotografía, 
          Arte textil, 
          Cerámica, 
          Poesía, 
          Teatro, 
          Música, 
          Clases, 
          Talleres y cursos, 
          Asesorías."
    />
    <PilaresCard
      title="Consumo con sentido"
      description="Soy en gran medida el resultado de mis decisiones"
      imageSrc={imageTemp}
      icon={iconCard}
      info="Compras comunitarias, 
Venta a granel, 
Venta productos huertos en red, 
Aprovisionamiento temprano, 
Datos – avisos económicos, 
Ventas de garaje, 
Talleres y cursos, 
Asesorías."
    />
    <PilaresCard
      title="Bienestar"
      description="Mi cuerpo, mi tempo, mi santuario"
      imageSrc={imageTemp}
      icon={iconCard}
      info="Corridas femeninas, 
Pilates, 
Cicletadas, 
Entrenamientos, 
Alimentos orgánicos, 
Suplementos, 
Alimentos funcionales, 
Maquillaje, 
Estilismo, 
Talleres y cursos, 
Asesorías."
    />
    <PilaresCard
      title="Salud Mental"
      description="Pensando, sintiendo, actuando"
      imageSrc={imageTemp}
      icon={iconCard}
      info="Meditación, 
Terapias, 
Aceites, 
Yoga, 
Música, 
Esparcimiento, 
Baños de bosque, 
Talleres y cursos, 
Asesorías."
    />
    <PilaresCard
      title="Medio Ambiente"
      description="Cuidando mi entorno me cuido a mí misma"
      imageSrc={imageTemp}
      icon={iconCard}
      info="Autocultivo hortalizas, 
Flores, 
Trueque de alimentos de temporada, 
Reutilización, 
Compostaje, 
Trueque de semillas, 
Jardinería ecológica, 
Trueque de ropa, 
Talleres y cursos, 
Asesorías."
    />
  </div>
</div>  

      { isLoggedIn && <div className="flex-1">
        {/* Banner Section */}
        <Banner />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-5">
          {/* Search Bar */}
          <SearchBar2 onSearch={handleSearch}/>

          {/* Activity Header */}
          <ActivityHeader matchCount={7} />

          {/* Matches Grid */}
          <div className="flex flex-col md:flex-row flex-1">
            <div className="w-full">
              <Match searchQuery={searchQuery} />
            </div>
          </div>
        </div>
      </div>}
    
      <Footer />
    </div>
    </>
  );
};

export default Pilares;
