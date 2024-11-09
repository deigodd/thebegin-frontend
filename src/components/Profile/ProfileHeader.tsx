import React, { useEffect, useState } from 'react'

type Props = {}

const ProfileHeader = (props: Props) => {

    const [userName, setUserName] = useState('Skersh');

    useEffect(() => {
      const savedName = localStorage.getItem('userName');
      if (savedName) {
        setUserName(savedName);
      }
    }, []);

  return (
    <section
          className="flex items-center justify-center min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 50%, rgba(200, 200, 200, 0.5) 50%), url(/path/to/header-image.jpg)`,
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
            <h1 className="text-4xl font-bold text-gray-800">Taller de Arte - {userName}</h1>
            <p className="text-lg text-gray-600 mt-2">
              Un espacio de encuentro y apoyo colaborativo entre mujeres
            </p>
          </div>
        </section>
  )
}

export default ProfileHeader