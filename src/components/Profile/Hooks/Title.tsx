interface TitleProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: 'left' | 'center' | 'right';
    color?: 'light' | 'dark';
  }
  
  export const Title: React.FC<TitleProps> = ({
    title,
    subtitle,
    className = '',
    align = 'center',
    color = 'dark'
  }) => {
    const alignClasses = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    };
  
    const colorClasses = {
      light: 'text-white',
      dark: 'text-gray-800'
    };
  
    return (
      <div className={`mb-12 ${alignClasses[align]} ${className}`}>
        <h2 className={`text-4xl font-serif italic mb-2 ${colorClasses[color]}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg font-light tracking-wider ${colorClasses[color]}`}>
            {subtitle}
          </p>
        )}
      </div>
    );
  };