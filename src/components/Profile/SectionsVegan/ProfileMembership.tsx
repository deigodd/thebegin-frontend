const ProfileMembership = () => {

  return (
      <div className="relative min-h-screen">
      {/* Background with overlay */}
        <div className="absolute inset-0 
      bg-[url('https://cdn.pixabay.com/photo/2016/08/17/10/04/fruits-1600023_1280.jpg')] 
      bg-cover bg-center">
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      {/* Content container */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          
          {/* Membership Card */}
          <div className="w-full md:w-96 bg-[#F6EFEA] rounded-3xl shadow-xl overflow-hidden relative">
            {/* Curved top section with image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-t-[2.5rem] overflow-hidden">
                <img 
                  src="https://i.pinimg.com/736x/9f/de/67/9fde671de96337f60fb79ab575e7acd3.jpg" 
                  alt="Vegetables in basket"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* White overlay that creates the curved effect */}
              <div className="absolute -bottom-6 left-0 right-0 h-12 bg-[#F6EFEA]"
                   style={{
                     borderTopLeftRadius: '50% 100%',
                     borderTopRightRadius: '50% 100%'
                   }}>
              </div>
            </div>
            
            {/* Card content */}
            <div className="p-6 text-center -mt-2">
              <h2 className="text-3xl mb-2">Membresia</h2>
              <h3 className="text-2xl font-semibold text-[#A77C60] mb-6">GOLD</h3>
              {/* Button container to center it on Y-axis */}
              <div className="flex justify-center items-center">
                <button className="bg-[#D0B7A5] text-amber-800 px-8 py-2 rounded-full hover:bg-white transition-colors mb-4">
                  Suscribirme
                </button>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
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
                  <span className="text-gray-700">{benefit}</span>
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


