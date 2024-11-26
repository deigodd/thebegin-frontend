//import CardService from "../Hooks/CardService";

const ProfileMembership = () => {

  return (
      <div className="relative min-h-screen flex justify-center items-center">

      {/* Background con overlay */}
        <div className="absolute inset-0 
      bg-[url('https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg')] 
      bg-cover bg-center">
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      {/* Contenido Card Membership */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          
          {/* Membership Card */}
          <div className="w-full md:w-96 bg-[#F6EFEA] shadow-xl overflow-hidden relative transition-transform hover:scale-105">

            {/* Intento de curva en la imagen */}
            <div className="relative">
              <div className="aspect-[4/3]  overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Vegetables in basket"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* White overlay that creates the curved effect */}
              <div className="absolute -bottom-6 left-0 right-0 h-16 bg-[#F6EFEA]"
                   style={{
                     borderTopLeftRadius: '50% 100%',
                     borderTopRightRadius: '50% 100%'
                   }}>
              </div>
            </div>
            
            {/* Card content */}
            <div className="p-6 text-center">
              <h2 className="text-3xl mb-2">Membresía</h2>
              <h3 className="text-4xl font-serif text-[#A77C60] mb-6">GOLD</h3>

              {/* Contenedor boton */}
              <div className="flex justify-center items-center">
                <button className="bg-[#D0B7A5] text-black text-xl px-8 py-2 rounded-full hover:bg-tbc-primarybrown-500 transition-colors mb-4">
                  Suscribirme
                </button>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Tenemos beneficios exclusivos para nuestra Comunidad Gold
            </h2>
            <ul className="space-y-4">
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
                <li key={index} className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2"></span>
                  <span className="text-black-700 text-xl">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileMembership;



