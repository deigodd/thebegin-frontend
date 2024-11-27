import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaUser } from 'react-icons/fa';
import ChangeImage from '../Hooks/ChangeImage';
import bg from "../../../assets/backgroundProfile/bgContactP1.jpg";

interface userProfile {
  cellphone: string;
  email: string;
  pname: string;
}

const ProfileContact: React.FC = () => {
  const [bgColor] = useState('#000000');
  const [bgImage] = useState<string | null>(bg);
  
  const [userProfile] = useState<userProfile>({
    cellphone: '+123-456-7890',
    pname: '@sofiamonteverde',
    email: 'hola@gmail.com',
  });

  return (
    <section
      className="flex items-center justify-center min-h-screen p-10"
      style={{
        backgroundColor: bgImage ? undefined : bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl w-full text-white">
        {/* Información de contacto */}
        <div className="flex flex-col gap-5 text-left w-[250px] lg:w-[300px]">
          <hr />
          <div className="flex items-center justify-center gap-3">
            <FaPhoneAlt size={20} />
            <span>{userProfile.cellphone}</span>
          </div>
          <hr />
          <div className="flex items-center justify-center gap-3">
            <FaUser size={20} />
            <span>{userProfile.pname}</span>
          </div>
          <hr />
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope size={20} />
            <span>{userProfile.email}</span>
          </div>
          <hr />
        </div>

        {/* Imagen centrada */}
        <div className="flex relative">
          <div className="w-[380px] h-[520px] rounded-t-full overflow-hidden bg-gray-800 flex items-center justify-center my-10">
            <ChangeImage />
          </div>
        </div>

        {/* Formulario de consultas */}
        <div className="flex flex-col gap-5 w-[300px] mb-10 relative text-white">
          <h2 className="text-5xl font-light italic">Consultas</h2>
          
          {/* Campo de nombre */}
          <div>
            <input
              type="text"
              placeholder="nombre ..."
              className="w-full bg-transparent text-white placeholder-white outline-none border-none focus:outline-none focus:border-none"
            />
            <hr className="border-white" />
          </div>
          
          {/* Campo de teléfono */}
          <div>
            <input
              type="text"
              placeholder="teléfono ..."
              className="w-full bg-transparent text-white placeholder-white outline-none border-none focus:outline-none focus:border-none"
            />
            <hr className="border-white" />
          </div>
          
          {/* Campo de email */}
          <div>
            <input
              type="email"
              placeholder="email ..."
              className="w-full bg-transparent text-white placeholder-white outline-none border-none focus:outline-none focus:border-none"
            />
            <hr className="border-white" />
          </div>
          
          {/* Campo de mensaje */}
          <div>
            <textarea
              placeholder="mensaje ..."
              className="w-full bg-transparent text-white placeholder-white outline-none border-none resize-none focus:outline-none focus:border-none"
              rows={4}
            />
          </div>

          {/* Botón de enviar */}
          <div className="relative mt-5 flex justify-end">
            <button className="px-7 border border-white text-white hover:bg-white hover:text-black transition rounded-3xl">
              ENVIAR
            </button>
          </div>
          <hr />
        </div>

      </div>
    </section>
  );
};

export default ProfileContact;
