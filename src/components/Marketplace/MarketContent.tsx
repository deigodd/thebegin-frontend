import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MarketProducts from '../Marketplace/MarketProduts';
import MarketVisual from '../Marketplace/MarketVisual';

const HomePage: React.FC = () => {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4">
      <SearchBar/>
      <MarketVisual/>
      <MarketProducts/>
    </div>
  );
};

export default HomePage;
