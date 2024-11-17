import React from 'react';

interface CategoryItemProps {
  category: string;
  iconPath: string;
  onSelectCategory: (category: string) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, iconPath, onSelectCategory }) => {
  return (
    <li className="bg-[#fefeff] p-2 rounded-sm flex items-center cursor-pointer
    transition-all duration-300 ease-in-out transform hover:bg-tbc-secondarygray-100 hover:scale-105" 
    onClick={() => onSelectCategory(category)}
    >
      <img src={iconPath} className="w-8 h-8 mr-2" alt="TBicon" />
      <span className="text-gray-700 hover:text-tbc-primaryred-500">{category}</span>
    </li>
  );
};

export default CategoryItem;
