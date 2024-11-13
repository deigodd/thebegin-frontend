import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import HomePageCard from "../components/HomePage/HomePageCard";
import PageSeparator from "../components/PageSeparator";
import backgroundImage from "../assets/background-home.svg";
import { Card } from "flowbite-react";
import videoHome from "../assets/que_es_tb_720p.mp4";

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
        <div
          className="absolute inset-0 z-20"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
          }}
        ></div>
      </div>
      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-grow">
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
                  rowStart={2}
                  colStart={1}
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
                  rowStart={3}
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
        </div>

        <PageSeparator title="The Begin" />

        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 mb-10 grid gap-4 sm:mt-16 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1">
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

        <PageSeparator title="Nuestros productos" />

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
