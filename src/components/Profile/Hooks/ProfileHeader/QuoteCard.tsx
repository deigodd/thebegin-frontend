interface QuoteCardProps {
    quote: string;
    position?: 'top' | 'bottom';
    className?: string;
  }
  
  //Tarjeta amarilla de descripcion bonito
  export const QuoteCard: React.FC<QuoteCardProps> = ({
    quote,
    position = 'top',
    className = ''
  }) => {
    const positionClasses = {
      top: 'top-8',
      bottom: 'bottom-8'
    };
  
    return (
      <div className={`absolute ${positionClasses[position]} left-1/2 -translate-x-1/2 z-20 ${className}`}>
        <div className="bg-amber-100/90 px-6 py-3 rounded-lg shadow-lg">
          <p className="text-amber-900 text-sm italic">"{quote}" ¡No te rindas!</p>
        </div>
      </div>
    );
  };