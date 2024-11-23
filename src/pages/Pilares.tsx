import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import PageSeparator from '../components/PageSeparator';
import backgroundImage from '../assets/background-marketplace.svg'
import comunidadVideo from "../assets/Home/comunidadVideo.mp4";
import iconSvg from "../assets/icons/svg/tb-icon-fill-gray.svg";
import PilaresCard from "../components/PilaresInfo/PilaresCard";
import imageTemp from "../assets/Home/pd21-34-07-kwan-a-1.jpg";
import iconCard from "../assets/icons/tb-icon-fill-lightBrown.png";
import imageTempNuestrosPilares from "../assets/Home/hands.jpg";

const Pilares: React.FC = () => {

  const [isNavbarFixed, setIsNavbarFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const videoHeight =
        document.getElementById("home-video")?.clientHeight || 0;
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
    <div className='flex flex-col min-h-screen'
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className={`fixed-navbar ${!isNavbarFixed ? "hidden-navbar" : ""}`}>
        <Navbar />
      </div>

      <div className="relative bg-white border border-gray-200 mt-10 mb-10 h-auto pt-4 flex flex-wrap">
          <img 
            src={imageTempNuestrosPilares}
            alt="Imagen Temporal"
            className="w-full md:w-1/2 h-64 md:h-full object-cover"
          />
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
  className="flex justify-center items-center mx-auto w-full h-[690px] 2xl:translate-x-0 md:max-w-7xl lg:mt-4 pt-1 space-y-2 overflow-hidden"
>
  <div className="grid gap-4 sm:mt-8 lg:grid-cols-5 lg:grid-rows-1 justify-center items-center">
  
    <PilaresCard
      title="Arte con sentido"
      description="El amor se pinta, se teje, se esculpe y se canta"
      imageSrc={imageTemp}
      icon={iconCard}
      info=""
    />
    <PilaresCard
      title="Consumo con sentido"
      description="Soy en gran medida el resultado de mis decisiones"
      imageSrc={imageTemp}
      icon={iconCard}
      info=""
    />
    <PilaresCard
      title="Bienestar"
      description="Mi cuerpo, mi tempo, mi santuario"
      imageSrc={imageTemp}
      icon={iconCard}
      info=""
    />
    <PilaresCard
      title="Salud Mental"
      description="Pensando, sintiendo, actuando"
      imageSrc={imageTemp}
      icon={iconCard}
      info=""
    />
    <PilaresCard
      title="Medio Ambiente"
      description="Cuidando mi entorno me cuido a mí misma"
      imageSrc={imageTemp}
      icon={iconCard}
      info=""
    />
  </div>
</div>
          <PageSeparator title="Comunidad" />
          <div className="relative mt-10 mb-10" style={{ height: "700px" }}>
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <video
            src={comunidadVideo}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover z-0"
          ></video>
          <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 items-center justify-center z-20 px-4 md:px-8">
            <div className="flex flex-col items-center justify-center">
              <img src={iconSvg} className="h-32 md:h-44 mb-4" alt="" />
              <p className="text-white text-2xl md:text-5xl font-thin text-center">
                Un espacio de encuentro
                <br />
                y apoyo colaborativo
                <br />
                entre mujeres
              </p>
              <button className="bg-white border-2 border-[#d2bb90] px-6 py-2 mt-8 hover:bg-black transition-colors duration-300 ease-in-out">
                <span className="text-2xl tracking-tight text-[#d2bb90]">
                  REGISTRARME
                </span>
              </button>
            </div>

            <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 items-center justify-center z-20 px-4 md:px-8">
              <div className="flex flex-col items-center justify-center">
                <img src={iconSvg} className="h-32 md:h-44 mb-4" alt="" />
                <p className="text-white text-2xl md:text-5xl font-thin text-center">
                  Un espacio de encuentro
                  <br />
                  y apoyo colaborativo
                  <br />
                  entre mujeres
                </p>
                <button className="bg-white border-2 border-[#d2bb90] px-6 py-2 mt-8 hover:bg-black transition-colors duration-300 ease-in-out">
                  <span className="text-2xl tracking-tight text-[#d2bb90]">
                    REGISTRARME
                  </span>
                </button>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 mt-4 lg:mt-0">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="flex border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden h-40 w-3/4 max-w-md"
                  >
                    <div className="w-2/5 h-full">
                      <img
                        src={`https://via.placeholder.com/150`}
                        alt={`Card ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="w-3/5 p-4 flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-gray-800">
                        Título de la Card {index + 1}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Descripción breve de la card {index + 1}. Aquí puedes
                        agregar el contenido que desees.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
          
      
      <Footer />
    </div>
  );
};

export default Pilares;
