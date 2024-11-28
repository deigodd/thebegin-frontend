import BackgroundImage from '../Hooks/BackgroundImage';

const ProfileMarketplace = () => {
  return (
    <BackgroundImage>
      <div className="min-h-screen flex items-center justify-center">

        {/* Main container  */}
        <div className="relative w-2/3 h-[100vh] bg-white overflow-hidden">

          {/* Container imagen */}
          <div className="absolute inset-0">
            <img 
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1615671524857-13c1fc39f3f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Garden background"
            />
          </div>
          
          {/* Overlay content */}
          <div className="relative h-full flex items-center justify-center p-6 ">

            {/* Card verde */}
            <div className="bg-tbc-pilargreen-600 p-8 text-white text-center 
                          max-w-xl backdrop-blur-sm transform transition-all duration-300
                          hover:shadow-xl group
                          transition-transform hover:scale-105
                          ">
              <h2 className="text-4xl font-serif mb-2 transform transition-all duration-300 
                           group-hover:translate-y-[-4px]">MI TIENDA</h2>
              <h3 className="text-4xl font-script mb-6 transform transition-all duration-300 
                           group-hover:translate-y-[-4px]">Online</h3>
              <div className="space-y-4 transform transition-all duration-300 
                            group-hover:translate-y-[-2px]">
                <p className="text-lg">
                  Encuentra todos mis productos en mi marketplace
                </p>
                <p className="text-lg mb-6">
                  Podrás comprar las mejores frutas y verduras.
                  Tengo una gran variedad, frescas y riquísimas.
                </p>
                
                <button className="bg-[#DEB887] text-white px-8 py-3 rounded-full 
                                 transition-all duration-300 hover:bg-[#CD853F] 
                                 hover:shadow-lg transform hover:translate-y-[-2px]">
                  VER MÁS Aquí
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default ProfileMarketplace;