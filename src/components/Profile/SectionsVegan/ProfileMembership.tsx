import React from 'react';
import { imageGeneral, ImageCategory } from '@/types/imageGeneral';

const ProfileMembership: React.FC = () => {

  const getImage = (category: ImageCategory) => {
    return imageGeneral[category].imageUrl;
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 
      bg-[url('https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg')] 
      bg-cover bg-center">
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-6xl mx-auto">

          {/* Membership Card */}
          <div className="w-full md:w-[380px] bg-[#FBF7F4]  shadow-lg overflow-hidden relative "
          style={{
            borderTopLeftRadius: '100% 70%',
            borderTopRightRadius: '100% 70%',
          }}>
          
          
            {/* Image Container with arch shape */}
            <div className="relative px-6 pt-6">
              <div className="relative aspect-[5/4] overflow-hidden rounded-t-[2rem]" 
                   style={{
                     borderTopLeftRadius: '50% 60%',
                     borderTopRightRadius: '50% 60%',
                   }}>
                <img 
                  src={getImage("membership")}
                  alt="Vegetales en cesta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card content */}
            <div className="p-6 text-center">
              <h2 className="text-5xl font-light mb-1 font-serif italic">Membresía</h2>
              <h3 className="text-5xl font-serif text-[#B08968] mb-6">GOLD</h3>

              {/* Button container */}
              <div className="flex justify-center items-center">
                <button className="w-full bg-[#D5BBA9] text-black text-xl py-2.5 hover:bg-[#B08968] transition-colors">
                  Suscribirme
                </button>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-2xl font-medium mb-8 text-gray-800">
              Tenemos beneficios exclusivos para nuestra Comunidad Gold.
            </h2>
            <ul className="space-y-5">
              {[
                'Clases Personalizadas de cocina',
                'Acceso a Encuentros VIP',
                'Acceso a Talleres en vivo',
                'Descuentos en productos de huerta',
                'Talleres de cultivo y riego',
                'Cursos online',
                'Descuentos en stand para la feria anual',
                'Sorteos y mucho más'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="w-2 h-2 bg-[#B08968] rounded-full mt-2.5"></span>
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMembership;
