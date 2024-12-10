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
  fontSize?: string;
  children?: ReactNode;
}

const CardPresentation = ({
  title,
  subtitle,
  content,
  bgColor = '',
  titleTextColor = 'text-gray-800',  // Valor por defecto
  contentTextColor = 'text-gray-800', // Valor por defecto
  fontSize = 'text-6xl',
  image,
  imageAlt,
  className = '',
  children
}: CardPresentationProps) => {
  if (image) {
    return (
      <div className={`${bgColor}  ${className} transition-transform hover:scale-105`}>
        <div className="h-64 w-full relative overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-cover object-center"
          />
          {children}
        </div>
      </div>
    );
  }

//text-6xl 
//text-lg

  return (
    <div className={`${bgColor} p-14 ${className} transition-transform hover:scale-105 relative`}>
      {title && (
        <h2 className={`${titleTextColor} ${fontSize} font-serif mb-6`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <span className="">
          {subtitle}
        </span>
      )}
      {content && (
        <p className={`${contentTextColor} text-lg`}>
          {content}
        </p>
      )}
      {children}
    </div>
  );
};

export default CardPresentation;
