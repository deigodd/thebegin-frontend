import React from 'react';

const AboutCard: React.FC = () => {
  return (
    <div className="relative w-[450px] h-[700px] max-h-[600px] rounded-lg border border-gray-400 shadow-xl flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl italic font-semibold text-white mb-4">Sobre mí</h2>
      <p className="text-center text-white text-lg leading-relaxed tracking-wide">
        Soy licenciada en comunicación, con el fin de crecer y brindar un producto mejor. Durante los últimos 4 años realicé numerosos cursos con importantes profesionales de la fotografía. Hoy te ofrezco mi mirada para guardar tus recuerdos para siempre.
      </p>
    </div>  
  );
};

export default AboutCard;
