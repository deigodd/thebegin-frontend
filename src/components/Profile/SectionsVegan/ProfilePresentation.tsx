import React from 'react';
import AudioCard from '../Hooks/AdioCard';
import WriteCard from '../Hooks/WriteCard';

const ProfilePresentation = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
      <div className="flex flex-row items-center space-x-6">
        {/* Componente AudioCard */}
        <AudioCard /> 
        
        {/* Título de la sección y descripción */}
        <div className="flex flex-row items-center space-x-6">
        <WriteCard/>
        </div>
      </div>
    </section>
  );
};

export default ProfilePresentation;
