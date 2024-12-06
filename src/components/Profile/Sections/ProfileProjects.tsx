import React, { useEffect, useState } from 'react';

import { PiStarFourFill } from "react-icons/pi";
import itemData from '../../../data/itemData.json';
interface UserProfile {
  name: string;
  pname: string;
  role: string;
  image: string;
}

const ProfileProjects: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Sofía Monteverde',
    pname: '@sofiamonteverde',
    image: 'https://lh3.googleusercontent.com/pelsDJaccSJIJBNMCsrXAJpC3A0AMdY53PXs6uYjfP_YwDj64thnVVHxNiuvTDp07xYFzPvFs95VVv_4N4upBTmx45NM8-IhTuBKBrAPfndn19XtXNA-79TpyIs7PoPYYEHv23Uy',
    role: 'Fotógrafa',
  });

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    const savedRole = localStorage.getItem('userRole');

    setUserProfile((prevProfile) => ({
      ...prevProfile,
      image: savedImage || prevProfile.image,
      role: savedRole || prevProfile.role,
    }));
  }, []);



  return (
    <section className="relative flex items-center min-h-screen bg-[#242c34]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen gap-3 relative">

        {/* Primera columna, siempre visible */}
        <div className="flex flex-col rounded-lg ml-10 justify-center items-center h-screen">
          <ul className="space-y-2">
            <h2 className="text-white mb-16 text-7xl">Sesiones</h2> {/* Título más grande */}
            {itemData.items.map((item) => (
              <li key={item.id} className="flex items-center">
                <PiStarFourFill className="text-white mr-5" /> {/* Ícono personalizado */}
                <span className="text-white text-xl mb-3">{item.sections}</span> {/* Texto de cada sección */}
              </li>
            ))}
          </ul>
        </div>

        {/* Columnas de las imágenes (ocultas en pantallas pequeñas) */}
        <div className="grid grid-cols-3 rounded-lg gap-2 lg:mr-10 h-screen">
          
          {/* Segunda columna */}
          <div className="rounded-b-3xl min-h-[150px] col-span-2 ml-5 overflow-hidden">
            <img alt='img' src="https://images.pexels.com/photos/9524375/pexels-photo-9524375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>

          {/* Tercera columna */}
          <div className="rounded-b-3xl min-h-[150px] overflow-hidden mr-10">
          <img alt='img' src="https://images.unsplash.com/photo-1687804823451-7b1c5995eac4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>

          {/* Columna de imagen de perfil */}
          <div className="rounded-3xl min-h-[200px] overflow-hidden ml-5">
            {/* Profile image */}
            <img src={userProfile.image} alt="Profile" className="object-cover w-full h-full rounded-3xl" />
          </div>

          {/* Columna con texto */}
          <div className="rounded-lg min-h-[200px] col-span-2 mr-10 flex flex-col items-end justify-center text-white">
            <h2 className="text-4xl font-light tracking-wide">{userProfile.role}</h2>
            {['APASIONADA', 'CURIOSA', 'INQUIETA'].map((word, index) => (
              <p key={index} className="text-lg tracking-widest">{word}</p>
            ))}
          </div>

          {/* Más columnas con imágenes */}
          <div className="rounded-3xl min-h-[250px] overflow-hidden mb-5 ml-5">
            <img alt='img' src="https://images.unsplash.com/photo-1678885408128-9b76727628a2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>
          <div className=" rounded-t-3xl min-h-[250px] col-span-2 overflow-hidden mr-10">
            <img alt='img' src="https://i.pinimg.com/736x/f4/dd/f4/f4ddf4bc0787c4d6614d7d85c2cd7cc2.jpg"/>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProfileProjects;
