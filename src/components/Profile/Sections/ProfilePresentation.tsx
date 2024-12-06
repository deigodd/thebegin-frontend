import { useEffect, useState } from 'react';
import AudioCard from '../Hooks/AudioCard';
import WriteCard from '../Hooks/WriteCard';

interface userProfile {
  name: string;
  pname: string;
  role: string;
  image: string;
}

const ProfilePresentation = () => {
  const [userProfile, setUserProfile] = useState<userProfile>({
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
    <section className="relative flex items-center justify-center min-h-screen bg-[#343c3c] text-white overflow-hidden">
      {/* Versión para móviles y tablets: la imagen como fondo de la sección */}
      <div 
        className="lg:hidden w-full h-full relative flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat p-4 space-y-4"
        style={{
          backgroundImage: `url('https://img.freepik.com/fotos-premium/fotografo-irreconocible-sosteniendo-camara-fotos-cinturon_201836-2732.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        
        <div className="z-10 w-full max-w-md mx-auto space-y-4">
          {/* AudioCard y WriteCard dentro de la pantalla en móviles y tablets */}
          <div className="flex justify-center items-center common-border rounded-md space-y-4">
            <AudioCard />
          </div>
          <div className="text-3xl sm:text-4xl font-semibold">{userProfile.name}</div>
          <p className="text-sm sm:text-base mt-2 tracking-widest">{userProfile.role}</p>
          <p className="text-sm sm:text-base">{userProfile.pname}</p>
          <div className="flex justify-center items-center common-border rounded-md space-y-4">
            <WriteCard />
          </div>
        </div>
      </div>

      {/* Versión para pantallas grandes (lg en adelante): diseño original */}
      <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-3 items-center w-full max-w-full h-full relative gap-8 px-8">
        <div className="flex justify-center items-center common-border rounded-md space-y-4 w-full h-auto">
          <AudioCard />
        </div>
        <div className="relative flex flex-col items-center text-center object-cover max-h-full h-screen">
          <img 
            src="https://img.freepik.com/fotos-premium/fotografo-irreconocible-sosteniendo-camara-fotos-cinturon_201836-2732.jpg" 
            alt="Sofía Monteverde" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-4xl font-semibold text-white">
            <span className="text-3xl sm:text-4xl">{userProfile.name}</span>
            <p className="text-sm sm:text-base mt-2 tracking-widest">{userProfile.role}</p>
          </div>
          <p className="text-sm sm:text-base absolute bottom-4">{userProfile.pname}</p>
        </div>
        <div className="flex justify-center items-center common-border rounded-md space-y-4 w-full h-auto">
          <WriteCard />
        </div>
      </div>
    </section>
  );
};

export default ProfilePresentation;
