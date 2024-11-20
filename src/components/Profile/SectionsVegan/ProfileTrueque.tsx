//import React from 'react';
import BackgroundTrueque from '../Hooks/Trueque/BackgroundTrueque';
import TruequeCard from '../Hooks/Trueque/TruequeCard';
import TruequeButton from '../Hooks/Trueque/ButtonTrueque';


const ProfileTrueque = () => {
  return (
    <div className="min-h-screen bg-[#FBF4EC] py-12 relative">
      <div className="container mx-auto px-4">

        <div className="absolute inset-0 max-y-2/3 -bottom-8 w-2/3 left-1/2 transform -translate-x-1/2">
            <BackgroundTrueque />
          </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Background Card */}
          

          {/* Trueque Title Card */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform z-20">
            <TruequeCard />
          </div>

          {/* Main Content */}
          <div className="relative pt-24 pb-32">
            <img
              src="https://cdn.pixabay.com/photo/2022/06/26/14/32/redcurrants-7285616_960_720.jpg"
              alt="Organic gardening and produce"
              className="w-full h-[600px] object-cover shadow-lg"
            />

            {/* Green Info Box */}
        <div className="absolute top-[calc(730px-80px)] left-16 right-16 z-10">
          <div className="bg-tbc-pilargreen-600 text-white p-8 rounded-3xl shadow-lg">
            <p className="text-xl md:text-xl text-center font-light">
              Te comparto todas las cosas lindas que tengo para intercambiar.
            </p>
          </div>
        </div>

            {/* Call to Action Button */}
            <div className="absolute bottom-[calc(120px-80px)] left-1/2 -translate-x-1/2 z-20">
              <TruequeButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTrueque;