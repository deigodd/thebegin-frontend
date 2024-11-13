import React from 'react';

interface CategoryItemProps {
  category: string;
  iconPath: string;
  isExpanded: boolean;
  onClick: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, iconPath, isExpanded, onClick }) => {
  return (
    <li className="bg-[#fefeff] p-2 rounded-sm flex items-center cursor-pointer
    transition-all duration-300 ease-in-out transform hover:bg-tbc-secondarygray-100 hover:scale-105" 
    onClick={() => {
        const targetElement = document.getElementById(category.toLowerCase().replace(/\s+/g, '-'));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      <img src={iconPath} className="w-8 h-8 mr-2" alt="TBicon" />
      <span className="text-gray-700 hover:text-tbc-primaryred-500">{category}</span>
      {/*isExpanded && <div className="pl-10 text-gray-500">Contenido de {category}</div>*/}
    </li>
  );
};

export default CategoryItem;
