import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import HomePageCard from "../components/HomePage/HomePageCard";
import PageSeparator from "../components/PageSeparator";
import backgroundImage from "../assets/background-home.svg";
import { Card } from "flowbite-react";
import videoHome from "../assets/Home/que_es_tb_720p.mp4";
import videoTheBegin from "../assets/Home/thebegin.mp4";
import comunidadVideo from "../assets/Home/comunidadVideo.mp4";
import iconSvg from "../assets/icons/svg/tb-icon-outline-orange.svg";
import CommunitySectionCard from "../components/HomePage/CommunitySectionCard";
import poleraTB from "../assets/Home/poleraTB.png";
import ProductCard from "../components/HomePage/ProductCard";

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
          <h1 className="text-white text-7xl font-serif text-center ">
            The Begin
          </h1>
          <h2 className="text-white text-2xl font-serif text-center mt-2">
            El Comienzo del Cuidado
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
              {/*Pilares*/}
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
                imgSrc="/src/assets/Home/hands.jpg"
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
                imgSrc="/src/assets/Home/hands.jpg"
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
                imgSrc="/src/assets/Home/hands.jpg"
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

          <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 items-center justify-center z-20 px-4 md:px-8">
            <div className="flex flex-col items-center justify-center sm:mt-10">
              <img src={iconSvg} className="h-32 md:h-44 mb-4" alt="" />
              <p className="text-white text-2xl md:text-5xl font-serif text-center">
                Un espacio de encuentro
                <br />
                y apoyo colaborativo
                <br />
                entre mujeres
              </p>
              <button className="bg-white border-2 border-[#d2bb90] px-6 py-2 mt-8 hover:bg-tbc-pilarorange-600 transition-colors duration-300 ease-in-out">
                <span className="text-2xl tracking-tight text-[#d2bb90]">
                  REGISTRARME
                </span>
              </button>
            </div>

            <div className="flex-col items-center justify-center gap-4 mt-4 lg:mt-0 hidden sm:flex">
              <CommunitySectionCard
                imageSrc="https://via.placeholder.com/150"
                imageAlt="Imagen1"
                title="Armá tu página web"
                description="Usala como presentación personal, muestrario de productos,
                  servicios y actividades."
              />
              <CommunitySectionCard
                imageSrc="https://via.placeholder.com/150"
                imageAlt="Imagen2"
                title="Sumate al Trueque"
                description="Publicá tus productos y/o servicios disponibles para
                  intercambiar con nuestra comunidad."
              />
              <CommunitySectionCard
                imageSrc="https://via.placeholder.com/150"
                imageAlt="Imagen3"
                title="Activá tu tienda online"
                description="Vendé tus productos y/o servicios."
              />
            </div>
          </div>
        </div>

        <PageSeparator title="Nuestros productos" />

        <div className="bg-[#c8b79d] my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col justify-end text-left w-1/2 ml-auto mb-16">
              <h2 className="text-4xl font-serif text-white">POLERA</h2>
              <hr className="w-full border-t border-gray-300 my-2" />
              <p className="text-white text-2xl font-thin">100% algodón</p>
              <hr className="w-full border-t border-gray-300 my-2" />
              <p className="text-white text-2xl font-thin">
                Talles: S - M - L - XL
              </p>

              <button className="bg-[#d19468]  px-6 py-2 mt-6 hover:bg-[#b57b57] transition-colors duration-300">
                <span className="font-semibold text-xl text-white"> USD </span>
                <span className="font-extrabold text-2xl text-white"> 120</span>
              </button>
            </div>

            <div className="flex justify-center items-center">
              <img src={poleraTB} alt="Polera" className="max-w-full h-auto" />
            </div>

            <div className="flex-col items-center justify-center gap-4 mt-4 lg:mt-0 hidden sm:flex">
              <ProductCard
                imageSrc="https://via.placeholder.com/150"
                imageAlt="Imagen1"
                title="TOTEBAG"
                description="Con bolsillo interno"
                extra="40 x 30 x 15 cm"
                price={90}
              />
              <ProductCard
                imageSrc="https://via.placeholder.com/150"
                imageAlt="Imagen3"
                title="TAZA"
                description="De cerámica"
                extra="Apta para microondas"
                price={40}
              />
              <ProductCard
                imageSrc="https://via.placeholder.com/150"
                imageAlt="Imagen2"
                title="POLERA"
                description="100% algodón"
                extra="Talles: S - M - L - XL"
                price={120}
              />

              <button className="bg-white border-2 border-[#d2bb90] px-6 py-2 mt-8 hover:bg-tbc-pilarorange-600 transition-colors duration-300 ease-in-out">
                <span className="text-2xl tracking-tight text-[#d2bb90]">
                  VER MÁS
                </span>
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
