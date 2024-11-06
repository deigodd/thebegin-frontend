//import React from 'react';
import SearchIcon from './SearchIcon';
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';
import StarIcon from './StarIcon';

const SearchBar = () => {
  return (
    <div className="bg-[#d8966d] rounded-lg shadow-sm mb-6 p-4 flex items-center justify-between">
        <div className="flex-1 mx-4">
        <div className="relative">
            <input
            type="text"
            placeholder="Buscar items..."
            className="bg-[#ececea] w-full pl-10 pr-4 py-2 border rounded-3xl focus:outline-none focus:border-orange-500"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">
            <SearchIcon />
            </span>
        </div>
        </div>
        <div className="flex items-center gap-4">
        <button className="bg-[#ececea] p-2 hover:bg-white rounded-full text-gray-600">
            <HeartIcon />
        </button>
        <button className="bg-[#ececea] p-2 hover:bg-white rounded-full text-gray-600">
            <StarIcon />
        </button>
        <button className="bg-[#ececea] p-2 hover:bg-white rounded-full text-gray-600">
            <CartIcon />
        </button>
        </div>
    </div>

  );
};

export default SearchBar;