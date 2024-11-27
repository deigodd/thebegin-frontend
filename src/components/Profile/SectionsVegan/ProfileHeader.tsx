import React from 'react';
import { useState } from 'react';
import AudioProgress from '../Hooks/AudioProgress';

const ProfileHeader: React.FC = () => {

  const [imageUrl] = useState<string>(
    'https://cdn.pixabay.com/photo/2019/06/11/13/33/salad-4267063_1280.jpg'
  );

  return (

    <div
      className="relative flex flex-col"
      style={{ backgroundImage: `url(${imageUrl})` }} // Agregar la imagen de fondo aquí
    >

        {/* Green background div positioned absolutely */}
        <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-[#ece4d8]" />

        {/* Content container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 flex-grow">
          {/* Header Quote */}
          <div className="bg-[#d1b289] p-4 text-center rounded-xl max-w-3xl mt-8 mx-auto mb-8">
            <p className="text-white italic">
              "Un sueño no se hace realidad por arte de magia, 
              necesita determinación y mucho trabajo"
            </p>
            <p className="text-white italic">¡No te rindas!</p>
          </div>

          {/* Main Content Card */}
          <div className="shadow-2xl overflow-hidden flex flex-col min-h-screen">
            <div className="p-8 bg-tbc-pilargreen-600 flex-grow">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Text Content */}
                <div className="flex-1 px-6">
                  <h1 className="text-7xl font-light mb-2 text-[#FFDDC8]">
                    SOY
                    <span className="text-7xl block font-script text-white px-6">Amelia</span>
                  </h1>
                  <p className="border-b-4 p-1 border-[#FFDDC8]"></p>
                  
                  <h2 className="text-2xl uppercase tracking-wider text-white font-semibold mb-6 p-1">
                    Amante de la Naturaleza
                  </h2>

                  <div className="space-y-4 text-white">
                    <p>
                      <span className="text-xl italic">
                        Llevo adelante este emprendimiento, que me llena de orgullo desde hace más de 10 años.
                      </span>
                    </p>
                    
                    <p className="text-xl italic">
                      Como amante de las plantas, la huerta y el jardín producimos nuestros propios
                      alimentos y semillas.
                    </p>
                    
                    <p className="text-xl italic">
                      Deseo que todas puedan también disfrutar de la huerta y el jardín, 
                      aprendiendo con cada siembra y ciclo de cultivo.
                    </p>
                  </div>
                </div>

                {/* Phone Image */}
                <div className="w-full lg:w-1/3 transition-transform hover:scale-105">
                  <div className="relative mx-auto w-72 h-[500px] bg-black rounded-[3rem] border-[14px] border-black overflow-hidden">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/08/04/20/48/woman-3584435_1280.jpg"
                      alt="Garden produce"
                      className="w-full h-full object-cover rounded-[2rem]"
                    />
                    
                     {/* Audio Controls */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[85%] bg-black/50 p-4 rounded-2xl backdrop-blur-sm">
                      <AudioProgress />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileHeader;