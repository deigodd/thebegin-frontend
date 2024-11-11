import React, { useState } from 'react';

const AboutCard: React.FC = () => {
  const [aboutText, setAboutText] = useState('Escribe algo sobre ti...');
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAboutText(e.target.value);
  };

  const handleBlur = () => {
    if (!aboutText.trim()) {
      setAboutText('Escribe algo sobre ti...');
    }
    setIsEditing(false);
  };

  return (
    <div className="relative w-80 h-96 bg-gray-100 rounded-lg shadow-xl flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Sobre Mí</h1>
      <div className="relative w-full text-center">
        {isEditing ? (
          <textarea
            value={aboutText}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="w-full h-24 p-2 text-lg font-light text-gray-600 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            autoFocus
          />
        ) : (
          <p
            className="text-lg font-light text-gray-600 cursor-pointer whitespace-pre-wrap"
            onClick={() => setIsEditing(true)}
          >
            {aboutText}
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
