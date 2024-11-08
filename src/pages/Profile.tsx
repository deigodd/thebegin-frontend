import React, { useEffect, useState } from 'react';
import UserOptions from '../components/UserOptions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
  // Usar useState para manejar el nombre
  const [userName, setUserName] = useState('Aaron López');

  // Simular la recuperación del nombre cuando se monta el componente
  useEffect(() => {
    // Intentar obtener el nombre de localStorage
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="bg-white min-h-screen p-6">
        {/* Encabezado */}
        <header className="flex justify-center items-center my-8">
  <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
    <h1 className="text-4xl font-bold text-gray-800">Taller de Arte - {userName}</h1>
    <p className="text-lg text-gray-600 mt-2">
      Un espacio de encuentro y apoyo colaborativo entre mujeres
    </p>
  </div>
</header>

        {/* Section: Presentación */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Presentación</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>En esta sección, el perfil puede cargar un video o una foto, así como un espacio para expresar un sentimiento, reflexión o mensaje.</p>
          </div>
        </section>

        {/* Section: Muestra de trabajo */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Muestra de Trabajo</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>Muestra de sus trabajos o servicios. Aquí se pueden abrir ventanas pop-up para consultas.</p>
          </div>
        </section>

        {/* Section: Destacar servicios */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Destacar Servicios</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>Espacio para destacar productos, servicios o cualquier contenido que desee mostrar.</p>
          </div>
        </section>

        {/* Section: Cursos o Talleres */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cursos y Talleres</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>Presentación de cursos o talleres con formulario de consulta.</p>
          </div>
        </section>

        {/* Section: Trueque */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Trueque</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>Sección para mostrar productos que estarán en el trueque, con enlace a información completa.</p>
          </div>
        </section>

        {/* Section: Marketplace */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Marketplace</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>Presentación de productos en el Marketplace, con enlace a la tienda online.</p>
          </div>
        </section>

        {/* Section: Membresía */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Membresía</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>Sección para suscribirse y acceder a beneficios exclusivos.</p>
          </div>
        </section>

        {/* Section: Calendario */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Calendario</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>Listado de actividades por fecha, con opción de consulta mediante formulario.</p>
          </div>
        </section>

        {/* Section: Noticias */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Noticias</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>Sección para comunicados, pedidos y ofrecimientos con opción de respuesta.</p>
          </div>
        </section>

        {/* Section: Contacto */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contacto</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>Información de contacto para que los usuarios se comuniquen.</p>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Profile;
