import React, { useEffect, useState } from 'react';
import WriteCard from '../Hooks/WriteCard';
import { PiStarFourFill } from "react-icons/pi";
import itemData from '../../../data/itemData.json';
import ChangeImage from '../Hooks/ChangeImage';
import img1 from '../../../assets/img1_ProjecP1.jpg'
import img2 from '../../../assets/img2_ProjecP1.jpg'
import img3 from '../../../assets/img3_ProjecP1.jpg'
import img4 from '../../../assets/img4_ProjecP1.jpg'
import img5 from '../../../assets/img5_ProjecP1.jpg'

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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setUserProfile((prevProfile) => ({ ...prevProfile, image: result }));
        localStorage.setItem('profileImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

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
          <div className="bg-red-700 rounded-b-3xl min-h-[150px] col-span-2 ml-5 overflow-hidden">
            <img alt='img' src={img1}/>
          </div>

          {/* Tercera columna */}
          <div className="bg-purple-700 rounded-b-3xl min-h-[150px] overflow-hidden mr-10">
          <img alt='img' src={img4}/>
          </div>

          {/* Columna de imagen de perfil */}
          <div className="bg-red-700 rounded-3xl min-h-[200px] overflow-hidden ml-5">
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
          <div className="bg-red-700 rounded-3xl min-h-[250px] overflow-hidden mb-5 ml-5">
            <img alt='img' src={img5}/>
          </div>
          <div className="bg-red-700 rounded-t-3xl min-h-[250px] col-span-2 overflow-hidden mr-10">
            <img alt='img' src={img3}/>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProfileProjects;
