import React, { useEffect, useState } from 'react';
import AudioCard from '../Hooks/AudioCard';
import WriteCard from '../Hooks/WriteCard';

interface UserProfile {
  name: string;
  pname: string;
  role: string;
  image: string;
}

const ProfilePresentation = () => {
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
    <section className="relative flex items-center justify-center min-h-screen bg-[#343c3c] text-white">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black opacity-80 pointer-events-none"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center w-full max-w-full h-full relative z-10">
        <div className="flex justify-center items-center common-border rounded-md space-y-4 w-full h-auto">
          <AudioCard />
        </div>

        <div className="relative flex flex-col items-center text-center object-cover max-h-full h-full">
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
          <WriteCard/>
        </div>
      </div>
    </section>
  );
};

export default ProfilePresentation;
