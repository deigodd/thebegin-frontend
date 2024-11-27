import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/background-home.svg";
import Form from "../components/Contact/ContactForm";

const Contact: React.FC = () => {
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

  // Función para manejar la acción al enviar el formulario
  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) => {
    console.log("Datos del formulario:", formData);
    //enviar los datos a un backend
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Barra de navegación */}
      <div className={`fixed-navbar ${!isNavbarFixed ? "hidden-navbar" : ""}`}>
        <Navbar />
      </div>

      {/* Título principal */}
      <div className="flex flex-col items-center justify-center w-full mt-20">
        <h1 className="text-tbc-primarybrown-500 text-5xl sm:text-7xl font-serif font-semibold text-center">
          Estamos aquí para ti
        </h1>
        <p className="text-tbc-primarybrown-600 text-lg sm:text-xl text-center mt-5 px-2">
          Para cualquier inquietud que tengas por favor llena el formulario y
          nos pondremos en contacto contigo lo más pronto posible.
        </p>
      </div>

      {/* Contenedor del formulario */}
      <div className="flex flex-col mx-auto justify-center w-full 2xl:translate-x-0 md:max-w-7xl pb-20">
        <Form onSubmit={handleFormSubmit} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;

