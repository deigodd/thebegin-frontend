import React from "react";

const List: React.FC = () => {

    return (

        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
            <h2 className="mb-6 text-xl font-serif text-white uppercase dark:text-white">Asistencia</h2>
            <ul className="text-white/90 dark:text-gray-300 font-light">
              <li className="mb-4">
                <a href="#" className="text-l hover:text-[#FFFFFF] hover:underline transition-colors duration-300">Contáctanos</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#FFFFFF] hover:underline transition-colors duration-300">Centro de ayuda</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#FFFFFF] hover:underline transition-colors duration-300">Tutoriales</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-serif text-white uppercase dark:text-white">Súmate a The Begin</h2>
            <ul className="text-white/80 dark:text-gray-300 font-light">
              <li className="mb-4">
                <a href="#" className="hover:text-[#FFFFFF] hover:underline transition-colors duration-300">Vende con nosotras</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#FFFFFF] hover:underline transition-colors duration-300">Nuestros sponsor</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-serif text-white uppercase dark:text-white">The Begin</h2>
            <ul className="text-white/80 dark:text-gray-300 font-light">
              <li className="mb-4">
                <a href="#" className="hover:text-[#FFFFFF] hover:underline transition-colors duration-300">Quiénes somos</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#FFFFFF] hover:underline transition-colors duration-300">Trueque</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#FFFFFF] hover:underline transition-colors duration-300">Begin Fest</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#FFFFFF] hover:underline transition-colors duration-300">Nuestra App</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-serif text-white uppercase dark:text-white">Acerca de</h2>
            <ul className="text-white/80 dark:text-gray-300 font-light">
              <li className="mb-4">
                <a href="#" className="hover:text-[#FFFFFF] hover:underline transition-colors duration-300">Términos y condiciones</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-[#FFFFFF] hover:underline transition-colors duration-300">Políticas de privacidad</a>
              </li>
            </ul>
          </div>
        </div>

    );
};

export default List;