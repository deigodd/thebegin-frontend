//import React from 'react';
import { Heart, Star, Search, ShoppingCart, ChevronRight } from 'lucide-react';

const SearchBar:React.FC = () => {
  return (
    <div className="bg-tbc-primaryred-600 md:rounded-lg sm:gap-2 shadow-sm mb-6 md:p-4 flex">
        <div className="flex scale-75 md:scale-100 w-full">
            <div className='bg-tbc-secondarygreen-100 w-16 md:w-32 flex place-items-center rounded-l-2xl'>
                <span className='hidden pl-4 sm:block'>Categorias</span>
                <ChevronRight/>
            </div>
            <div className="relative ml-1 grow">
                <input
                type="text"
                placeholder="Buscar items..."
                className="bg-tbc-secondarygreen-100 w-full pl-10 pr-4 py-2 border-none"
                />
            </div>
            <div className='bg-tbc-primarybrown-600 w-16 rounded-r-2xl text-tbc-secondarygreen-100'>
                <Search className='mt-2 ml-2 sm:ml-4'/>
            </div>
        </div>
        <div className="flex gap-2 scale-75 md:scale-100">
            <button className="bg-tbc-secondarygreen-100 p-2 hover:bg-white rounded-full text-tbc-primarybrown-600">
                <Heart />
            </button>
            <button className="bg-tbc-secondarygreen-100 p-2 hover:bg-white rounded-full text-tbc-primarybrown-600">
                <Star />
            </button>
            <button className="bg-tbc-secondarygreen-100 p-2 hover:bg-white rounded-full text-tbc-primarybrown-600">
                <ShoppingCart />
            </button>
        </div>
    </div>

  );
};

export default SearchBar;