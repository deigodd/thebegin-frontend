import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import HomePageCard from "../components/HomePage/HomePageCard";
import PageSeparator from "../components/PageSeparator";
import backgroundImage from "../assets/background-home.svg";
import { motion } from "framer-motion";
import { Card } from "flowbite-react";

const HomePage: React.FC = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              {/*Marketplace*/}
              <HomePageCard
                centerCard={false}
                rowStart={1}
                colStart={1}
                imageIndex={1}
                alt="Marketplace"
                href="/marketplace"
                cardTitle="MARKETPLACE"
                buttonText="Visita el Marketplace"
                cardSubtitle="Tu Tienda en 2 pasos"
              />

              {/*Comunidad*/}
              <HomePageCard
                centerCard={true}
                rowStart={0}
                colStart={0}
                imageIndex={1}
                alt="Comunidad"
                href="/"
                cardTitle="COMUNIDAD"
                buttonText="Conoce de nuestra comunidad"
                cardSubtitle="Un espacio de encuentro y apoyo colaborativo entre mujeres"
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
                rowStart={1}
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
      </motion.div>

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
  );
};

export default HomePage;
