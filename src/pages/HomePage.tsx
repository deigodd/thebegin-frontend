import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import polera from "../assets/TB-Products/polera.png";
import taza from "../assets/TB-Products/taza.png";
import totebag from "../assets/TB-Products/tote.png";

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
      <div
        className="relative mt-24 md:mt-0 h-128 sm:h-144 md:h-128 lg:h-144"
        id="home-video"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video
          src={videoHome}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover z-0"
          playsInline
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
                cardDescription="The Begin, es la comunidad online de mujeres más completa  El núcleo es la APP THE BEGIN que cuenta con múltiples segmentos:  TRUEKE, bolsa de trabajo, Marketplace, cuidado personal, salud mental entre otros, desde lo práctico, hasta lo onírico."
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
                cardDescription="Un espacio para comprar, vender e intercambiar productos y servicios, apoyando a tu comunidad.
                Este espacio divide  los 5 Pilares The Begin. Al seleccionar uno de ellos verás las subcategorías correspondientes.
                por ejemplo: Arte con Sentido: Pintura, Escultura, Dibujo, Grabado, Fotografía,
                etc"
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
                cardDescription="Volvemos al origen, intercambiemos cosas, en un mundo donde no se necesita el dinero si no que el intercambio es la estrella. Quiere hacer trueque de producto o servicio 
                Hace la oferta y el sistema buscará a tu interesado y entre muchos podrás hacerlo factible. Cruzar tus productos/servicios y haz tu TRUEQUE. "
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
                cardDescription="2 días Festival, que canaliza la experiencia The Begin y  va rotando en distintos lugares de América Latina.
                Un encuentro masivo donde se ven en acción todos los segmentos de la Plataforma. Estos serán espacios diseñados para que las mujeres nos encontremos físicamente, nos conozcamos, nos abracemos y nos inspiremos, intercambiemos  nuestras habilidades, expongamos nuestros productos artísticos y culturales."
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
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
              </Card>
            </div>
            <div className="relative flex flex-col h-full">
              <Card
                className="max-w-sm flex flex-col h-full"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://cdn0.psicologia-online.com/es/posts/2/7/5/que_hacer_en_la_primera_cita_para_conquistar_5572_600.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ¿Qué es y para qué TB?
                </h5>
                <p className="font-normal text-justify text-gray-700 dark:text-gray-400 flex-grow">
                  Una plataforma y red social diseñada exclusivamente para
                  mujeres, masiva y multifuncional, que impulsa conexiones
                  valiosas para fomentar el crecimiento individual y colectivo.
                  Con el propósito de potenciar la energía creadora de cada
                  mujer, esta plataforma busca ser el espacio donde cada una
                  pueda alcanzar sus metas personales y profesionales.
                </p>
              </Card>
            </div>
            <div className="relative flex flex-col h-full">
              <Card
                className="max-w-sm flex flex-col h-full"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://img.unocero.com/2020/10/mujeres-cursos-programacion-1200x600.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Como funciona TB
                </h5>
                <p className="font-normal text-justify text-gray-700 dark:text-gray-400 flex-grow">
                  Nuestra plataforma es un espacio colaborativo basado en
                  afinidades y coincidencias. Regístrate y conecta según tus
                  intereses, profesión, ocupación, modelo de negocio,
                  necesidades específicas de información o preferencias de
                  interacción. Cada conexión está diseñada para maximizar el
                  valor y la relevancia en tu experiencia.
                </p>
              </Card>
            </div>
            <div className="relative flex flex-col h-full">
              <Card
                className="max-w-sm flex flex-col h-full"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://mejorconsalud.as.com/wp-content/uploads/2016/02/mujer-feliz-1.jpg?auto=webp&quality=60&width=1920&crop=16:9,smart,safe"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Beneficios para ti
                </h5>
                <p className="font-normal text-justify text-gray-700 dark:text-gray-400 flex-grow">
                  The Begin es la comunidad en línea más completa para mujeres.
                  Su núcleo, la app The Begin, integra múltiples segmentos:
                  trueque, bolsa de trabajo, marketplace, cuidado personal,
                  salud mental y más. Desde soluciones prácticas hasta
                  aspiraciones soñadoras, esta plataforma inclusiva promueve la
                  colaboración sin discriminación. Con tecnologías avanzadas de
                  vinculación, The Begin facilita la construcción de una red de
                  apoyo y el logro de metas colectivas e individuales,
                  fortaleciendo la comunidad de mujeres en un entorno único y
                  transformador.
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
            playsInline
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
              <Link
                to="/register"
                className="bg-white border-2 border-[#d2bb90] px-6 py-2 mt-8 hover:bg-tbc-pilarorange-600 transition-colors duration-300 ease-in-out"
              >
                <span className="text-2xl tracking-tight text-[#d2bb90]">
                  REGISTRARME
                </span>
              </Link>
            </div>

            <div className="flex-col items-center justify-center gap-4 mt-4 lg:mt-0 hidden sm:flex">
              <CommunitySectionCard
                imageSrc="https://brainfoodmkt.com/wp-content/uploads/2021/07/tipos-de-paginas-web.png"
                imageAlt="Imagen1"
                title="Armá tu página web"
                description="Usala como presentación personal, muestrario de productos,
                  servicios y actividades."
              />
              <CommunitySectionCard
                imageSrc="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/s/shutterstock_460130851.jpg"
                imageAlt="Imagen2"
                title="Sumate al Trueque"
                description="Publicá tus productos y/o servicios disponibles para
                  intercambiar con nuestra comunidad."
              />
              <CommunitySectionCard
                imageSrc="https://blog.zenitx.com/wp-content/uploads/2020/03/tienda-online.jpg"
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
                imageSrc={totebag}
                imageAlt="Imagen1"
                title="TOTEBAG"
                description="Con bolsillo interno"
                extra="40 x 30 x 15 cm"
                price={90}
              />
              <ProductCard
                imageSrc={taza}
                imageAlt="Imagen3"
                title="TAZA"
                description="De cerámica"
                extra="Apta para microondas"
                price={40}
              />
              <ProductCard
                imageSrc={polera}
                imageAlt="Imagen2"
                title="POLERA"
                description="100% algodón"
                extra="Talles: S - M - L - XL"
                price={120}
              />

              <Link
                to="/marketplace"
                className="bg-white border-2 border-[#d2bb90] px-6 py-2 mt-8 hover:bg-tbc-pilarorange-600 transition-colors duration-300 ease-in-out"
              >
                <span className="text-2xl tracking-tight text-[#d2bb90]">
                  VER MÁS
                </span>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
