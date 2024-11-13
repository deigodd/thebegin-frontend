import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

const CategoriesSearchBar: React.FC<{ onSelectCategory: (category: string) => void }> = ({ onSelectCategory }) => {
  const [isHovering, setIsHovering] = useState(false);

  const categories = ["" ,"Producto", "Servicio", "Comida"];

  return (
    <div
      className='relative bg-tbc-secondarygreen-100 w-16 md:w-32 flex z-auto place-items-center rounded-l-2xl'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className='hidden pl-4 md:block'>Categorías</span>
      <ChevronRight />

      {/* Submenú de categorías */}
      {isHovering && (
        <ul className="absolute top-full left-0 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {categories.map((category) => (
            <li
              key={category}
              className="p-2 rounded-md hover:bg-tbc-secondarygreen-100 cursor-pointer"
              onClick={() => onSelectCategory(category)}
            >
              {category}
              {category==="" && ("Todas")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesSearchBar;
