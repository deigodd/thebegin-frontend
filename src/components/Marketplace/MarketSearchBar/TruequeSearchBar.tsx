import React from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import Icons from './MarketIcons';

const TruequeSearchBar: React.FC<{ onCategorySelect: (category: string) => void }> = ({ onCategorySelect }) => {
  return (
    <div className="bg-tbc-secondarygreen-500 lg:rounded-lg sm:gap-2 shadow-sm lg:p-4 flex z-20">
      <SearchBar onCategorySelect={onCategorySelect} />
      <Icons />
    </div>
  );
};

export default TruequeSearchBar;