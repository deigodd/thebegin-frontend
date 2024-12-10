import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tbIcon from "../assets/icons/svg/tb-icon-outline-brown.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Aqui verificamos si hay token, despúes hay que implementar para validar si el token esta vigente -> TO-DO
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    //Cerrar sesion
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  const activeStyle = {
    color: "#7c513a",
    fontWeight: "bold",
  };

  return (
    <nav className="border-gray-200 bg-tbc-pilarorange-600">
      {/*padre*/}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse w-10 md:w-32">
          <img src={tbIcon} className="h-16" alt="The Begin Logo" />
          <span className="self-center text-2xl whitespace-nowrap">
            <span className="font-thin text-white">The</span>
            <span className="text-white">Begin</span>
          </span>
        </a>
        
        <div className="flex xl:order-2 space-x-3 xl:space-x-0 rtl:space-x-reverse">
          {isLoggedIn ? (
            <>
            <a
              href="/mi-perfil"
              className="text-white focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center bg-[#a56441] hover:bg-[#7c513a]"
            >
              MI PERFIL
            </a>
            <button
              onClick={handleLogout}
              className="text-white focus:ring-1 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 bg-red-600 hover:bg-red-500 transition-colors duration-300 ease-in-out"
            >
              CERRAR SESIÓN
            </button>
          </>
          ) : (
            <a
              href="/login"
              className="text-white focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center bg-[#a56441] hover:bg-[#7c513a] transition-colors duration-300 ease-in-out"
            >
              INICIAR SESIÓN
            </a>
          )}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#a56441] dark:focus:ring-white"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Abre el menú</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full xl:flex xl:w-auto xl:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 xl:p-0 mt-4 border border-gray-100 rounded-lg  xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 bg-tbc-pilarorange-500 xl:bg-tbc-pilarorange-600">
            <li>
              <a
                href="/"
                className={`block py-2 px-3 md:p-0 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7c513a] transition-colors duration-300 ease-in-out`}
                style={isActive("/") ? activeStyle : {}}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/the-begin"
                className={`block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7c513a] transition-colors duration-300 ease-in-out`}
                style={isActive("/the-begin") ? activeStyle : {}}
              >
                THE BEGIN
              </a>
            </li>
            <li>
              <a
                href="/pilares"
                className={`block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7c513a] transition-colors duration-300 ease-in-out`}
                style={isActive("/pilares") ? activeStyle : {}}
              >
                PILARES
              </a>
            </li>
            <li>
              <a
                href="/begin-fest"
                className={`block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7c513a] transition-colors duration-300 ease-in-out`}
                style={isActive("/begin-fest") ? activeStyle : {}}
              >
                BEGIN FEST
              </a>
            </li>
            <li>
              <a
                href="/trueque"
                className={`block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7c513a] transition-colors duration-300 ease-in-out`}
                style={isActive("/trueque") ? activeStyle : {}}
              >
                TRUEQUE
              </a>
            </li>
            <li>
              <a
                href="/marketplace"
                className={`block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7c513a] transition-colors duration-300 ease-in-out`}
                style={isActive("/marketplace") ? activeStyle : {}}
              >
                MARKETPLACE
              </a>
            </li>
            <li>
              <a
                href="/tecito"
                className={`block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7c513a] transition-colors duration-300 ease-in-out`}
                style={isActive("/tecito") ? activeStyle : {}}
              >
                TECITO
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className={`block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7c513a] transition-colors duration-300 ease-in-out`}
                style={isActive("/contacto") ? activeStyle : {}}
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
