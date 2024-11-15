import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import HomePageCard from "../components/HomePage/HomePageCard";
import PageSeparator from "../components/PageSeparator";
import backgroundImage from "../assets/background-home.svg";
import { Card } from "flowbite-react";
import videoHome from "../assets/que_es_tb_720p.mp4";
import videoTheBegin from "../assets/thebegin.mp4";
import comunidadVideo from "../assets/comunidadVideo.mp4";
import iconSvg from "../assets/icons/svg/tb-icon-fill-gray.svg";

const HomePage: React.FC = () => {
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
    <>
      <div className={`fixed-navbar ${!isNavbarFixed ? "hidden-navbar" : ""}`}>
        <Navbar />
      </div>
      <div className="relative h-104" id="home-video">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video
          src={videoHome}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover z-0"
        ></video>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h1 className="text-white text-4xl font-bold text-center">
            The Begin
          </h1>
          <h2 className="text-white text-2xl font-semibold text-center mt-2">
            el comienzo del cuidado
          </h2>
        </div>
      </div>
      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pb-16 sm:pb-20">
          <div className="mx-auto lg:max-w-7xl lg:px-8 px-4 sm:px-6">
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              {/*Marketplace*/}
              <HomePageCard
                centerCard={false}
                rowStart={1}
                colStart={1}
                imageIndex={0}
                alt="Pilares"
                href="/pilares"
                cardTitle="PILARES"
                buttonText="Descubre Nuestros Pilares"
                cardSubtitle="Nuestros Pilares"
              />
              <HomePageCard
                centerCard={false}
                rowStart={2}
                colStart={1}
                imageIndex={1}
                alt="Marketplace"
                href="/marketplace"
                cardTitle="MARKETPLACE"
                buttonText="Visita el Marketplace"
                cardSubtitle="Tu Tienda en 2 pasos"
              />

              <HomePageCard
                centerCard={true}
                rowStart={0}
                colStart={0}
                imageIndex={1}
                alt="Comunidad"
                href="/"
                cardTitle="COMUNIDAD"
                buttonText="Descubre la Comunidad"
                cardSubtitle="Un espacio de encuentro y apoyo colaborativo entre mujeres"
                cardDescription="Un espacio donde podrás armar tu página web personal, para utilizarla por ejemplo, como presentación personal, muestrario de productos, servicios y actividades."
              />

              {/*Trueque*/}
              <HomePageCard
                centerCard={false}
                rowStart={1}
                colStart={3}
                imageIndex={2}
                alt="Trueque"
                href="/trueque"
                cardTitle="TRUEQUE"
                buttonText="Visita lo trueques"
                cardSubtitle="Llegó el Trueque"
              />

              {/*Begin Fest*/}
              <HomePageCard
                centerCard={false}
                rowStart={2}
                colStart={3}
                imageIndex={3}
                alt="Begin Fest"
                href="/begin-fest"
                cardTitle="BEGIN FEST"
                buttonText="Conoce nuestro festival"
                cardSubtitle="¿De qué se trata?"
              />
            </div>
          </div>
        </div>

        <PageSeparator title="The Begin" />

        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 mb-10 grid gap-4 sm:mt-16 grid-cols-1 lg:grid-cols-4 lg:grid-rows-1">
            <div className="relative flex flex-col h-full">
              <Card className="max-w-sm flex flex-col h-full p-0">
                <video
                  src={videoTheBegin}
                  loop
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                ></video>
              </Card>
            </div>
            <div className="relative flex flex-col h-full">
              <Card
                className="max-w-sm flex flex-col h-full"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/src/assets/hands.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ¿Qué es y para qué TB?
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 flex-grow">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  aliquam doloremque est corrupti qui voluptate, porro excepturi
                  blanditiis quo dolor autem sunt, hic consequatur minus!
                  Cupiditate, eligendi. Eum, aspernatur odit.
                </p>
              </Card>
            </div>
            <div className="relative flex flex-col h-full">
              <Card
                className="max-w-sm flex flex-col h-full"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/src/assets/hands.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Como funciona TB
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 flex-grow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  possimus hic et soluta quasi beatae suscipit ducimus impedit
                  enim, quos quod repellat, fugiat quis ratione corporis ex.
                  Doloribus, fugiat iusto!
                </p>
              </Card>
            </div>
            <div className="relative flex flex-col h-full">
              <Card
                className="max-w-sm flex flex-col h-full"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/src/assets/hands.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Beneficios para ti
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 flex-grow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  ipsam atque dicta sint nesciunt eius, excepturi exercitationem
                  impedit? Sint neque dolor eos? Quibusdam minima, quis magnam
                  laboriosam sit totam labore?
                </p>
              </Card>
            </div>
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

        <PageSeparator title="Nuestros productos" />

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
