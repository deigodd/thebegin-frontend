import React from "react";
import backgroundImage from '../../../assets/6075834.jpg'
import { FaPause, FaBackward, FaForward } from 'react-icons/fa';

const ProfileHeader: React.FC = () => {

  return (

    <div
  className="font-sans antialiased leading-normal tracking-wider min-h-screen"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

      <div className="max-w-5xl mx-auto py-12 px-4">

        {/* Header Quote */}
          <div className="bg-amber-100 p-4 text-center rounded-t-lg">
            <p className="text-gray-700 italic">
              "Un sueño no se hace realidad por arte de magia, 
              necesita determinación y mucho trabajo"
            </p>
            <p className="text-gray-600 font-semibold">¡No te rindas!</p>
          </div>

        {/* Main Content Card */}
        <div className="rounded-lg shadow-2xl overflow-hidden" >
          

          {/* Main Content */}
          <div className="p-8 bg-tbc-pilargreen-500">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Text Content */}
              <div className="flex-1">
                <h1 className="text-5xl font-light mb-2 text-[#FFDDC8]">
                  SOY
                  <span className="block font-script text-6xl text-white px-6">Amelia</span>
                </h1>
                <p className="border-b-4 p-1 border-[#FFDDC8]"> </p>
                
                <h2 className="text-xl uppercase tracking-wider text-white font-semibold mb-6 p-1">
                  Amante de la Naturaleza
                </h2>

                <div className="space-y-4 text-white">
                  <p>
                  <span className="italic"> Llevo adelante este emprendimiento, que me llena de orgullo desde hace más de 10 años. </span>
                  </p>
                  
                  <p>
                    Como amante de las plantas, la huerta y el jardín producimos nuestros propios
                    alimentos y semillas.
                  </p>
                  
                  <p>
                    Deseo que todas puedan también disfrutar de la huerta y el jardín, 
                    aprendiendo con cada siembra y ciclo de cultivo.
                  </p>
                </div>
              </div>

              {/* Phone Image */}
              <div className="w-full lg:w-1/3">
                <div className="relative mx-auto w-72 h-[500px] bg-black rounded-[3rem] border-[14px] border-black overflow-hidden">
                  <img
                    src="https://img.freepik.com/fotos-premium/fotografo-irreconocible-sosteniendo-camara-fotos-cinturon_201836-2732.jpg"
                    alt="Garden produce"
                    className="w-full h-full object-cover rounded-[2rem]"
                  />
                  { /*<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-800 rounded-full"></div> */}
                  
                    {/* Controles de audio */}
              {/* Controles de audio */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-6 text-white bg-black/50 px-4 py-2 rounded-full">
                  <button className="text-2xl">
                    <FaBackward />
                  </button>
                  <button className="text-4xl text-[#FFDDC8]">
                    <FaPause />
                  </button>
                  <button className="text-2xl">
                    <FaForward />
                  </button>
              </div>

              </div>
            </div>
          </div>
        </div>

          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-green-100/50"></div>
            <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-green-100/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;