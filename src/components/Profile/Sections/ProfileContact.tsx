import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaMousePointer, FaPersonBooth, FaUser } from 'react-icons/fa';
import ChangeImage from '../Hooks/ChangeImage';
import bg from "../../../assets/backgroundProfile/bgContactP1.jpg";

const ProfileContact: React.FC = () => {
  const [bgColor, setBgColor] = useState('#000000');
  const [bgImage] = useState<string | null>(bg);

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
      <div className="flex flex-wrap items-center justify-center max-w-7xl w-full text-white">
        {/* Información de contacto */}
        <div className="flex flex-col gap-5 text-left w-auto">
          <hr />
          <div className="flex items-center gap-3">
            <FaPhoneAlt size={20} />
            <span>+123-456-7890</span>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <FaUser size={20} />
            <span>@sofiamonteverde</span>
          </div>
          <hr />
          <div className="flex items-center gap-3">
            <FaEnvelope size={20} />
            <span>hola@gmail.com</span>
          </div>
          <hr />
        </div>

        {/* Imagen centrada */}
        <div className="relative">
          <div className="w-[380px] h-[520px] rounded-t-full overflow-hidden bg-gray-800 flex items-center justify-center">
            <ChangeImage />
          </div>
        </div>

        {/* Formulario de consultas */}
        <div className="flex relative flex-col gap-5 w-[300px]">
          <h2 className="text-2xl font-light italic">Consultas</h2>
          <input
            type="text"
            placeholder="nombre ..."
            className="w-full p-2 bg-transparent border-b border-white outline-none placeholder-white"
          />
          <input
            type="text"
            placeholder="teléfono ..."
            className="w-full p-2 bg-transparent border-b border-white outline-none placeholder-white"
          />
          <input
            type="email"
            placeholder="email ..."
            className="w-full p-2 bg-transparent border-b border-white outline-none placeholder-white"
          />
          <textarea
            placeholder="mensaje ..."
            className="w-full p-2 bg-transparent border-b border-white outline-none placeholder-white resize-none"
          />
          <div className='relative'>
            <button className=" absolute right-0 px-5 py-2 border border-white text-white hover:bg-white hover:text-black transition">
              ENVIAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileContact;
