import BackgroundImage from '../../../assets/De la puerta a la mesa.png'
import { MOCK_USERS, User } from '@/types/User';
import { useEffect, useState } from 'react';

const ProfileContact = () => {

  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const fetchedUser = MOCK_USERS.find(user => user.id === '2');  // Usamos el id '2' para buscar a Amalia Ribero
    setUser(fetchedUser);
  }, []);

  // Si el usuario no ha sido cargado, mostramos un mensaje de carga
  if (!user) return <div>Loading...</div>;


return (

  <div className="min-h-screen bg-tbc-primarybrown-100 flex flex-col">
      { /* BACKGROUND */}
      <section className="font-sans antialiased leading-normal tracking-wider" 
        style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
  <div className="container mx-auto py-20">
    <div className="flex justify-center">
      { /* FOTO */}
      <div 
        className="flex flex-col items-center justify-center text-center w-96 h-96 rounded-full bg-cover"
        style={{
          backgroundImage: `url(${user.profileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
    </div>
  </div>
</section>


  <div className='flex-1 bg-[#bea594] px-4'>
    <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">

      {/* NOMBRE */}
      <div className="text-center">
        <h1 className="flex justify-center items-center font-bold text-6xl mb-4">
            <span className="mr-2 font-serif text-white">{user.name.split(" ")[0]}</span>
            <span className="font-serif">{user.name.split(" ")[1]}</span>
          </h1>
        </div>

          {/* Sección de contacto */}
          <div className="w-full max-w-2xl rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M16.5 7.5v.01"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-black">@{user.name.split(" ")[0]}</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-black">+569 4227 6221</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-black">Chile</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-black">micorreo@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContact;