//import React from 'react';
import { Heart, Star, Search, ShoppingCart } from 'lucide-react';

const SearchBar:React.FC = () => {
  return (
    <div className="bg-tbc-primaryred-600 rounded-lg shadow-sm mb-6 p-4 flex items-center justify-between">
        <div className="flex-1 mx-4">
        <div className="relative">
            <input
            type="text"
            placeholder="Buscar items..."
            className="bg-tbc-secondarygreen-100 w-full pl-10 pr-4 py-2 border rounded-3xl focus:outline-none focus:border-orange-500"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">
            <Search />
            </span>
        </div>
        </div>
        <div className="flex items-center gap-4">
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