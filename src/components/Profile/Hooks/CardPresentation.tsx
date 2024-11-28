import { ReactNode } from 'react';

interface CardPresentationProps {
  title?: string;
  subtitle?: string;
  content?: string;
  bgColor?: string;
  textColor?: string;
  titleTextColor?: string;  // Nuevo prop para color de título
  contentTextColor?: string; // Nuevo prop para color de contenido
  image?: string;
  imageAlt?: string;
  className?: string;
  children?: ReactNode;
}

const CardPresentation = ({
  title,
  subtitle,
  content,
  bgColor = '',
  titleTextColor = 'text-gray-800',  // Valor por defecto
  contentTextColor = 'text-gray-800', // Valor por defecto
  image,
  imageAlt,
  className = '',
  children
}: CardPresentationProps) => {
  if (image) {
    return (
      <div className={`${bgColor} ${className} transition-transform hover:scale-105 relative`}>
        {/* Contenedor principal con la imagen de fondo */}
        <div className="relative w-full h-full object-cover">
          {/* Imagen en la parte superior */}
          <div className="w-full h-64 overflow-hidden transition-transform hover:scale-105">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenedor para el texto */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-8">
            {title && (
              <h2 className={`${titleTextColor} text-4xl font-serif mb-6`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <span className="text-3xl font-script">{subtitle}</span>
            )}
            {content && (
              <p className={`${contentTextColor} text-lg`}>{content}</p>
            )}
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${bgColor} p-8 ${className} transition-transform hover:scale-105 relative`}>
      {title && (
        <h2 className={`${titleTextColor} text-4xl font-serif mb-6`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <span className="text-3xl font-script">{subtitle}</span>
      )}
      {content && (
        <p className={`${contentTextColor} text-lg`}>{content}</p>
      )}
      {children}
    </div>
  );
};


export default CardPresentation;
