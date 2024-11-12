import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MarketVisual from '../Marketplace/MarketVisual';

const HomePage: React.FC = () => {
  return (
    <div className="flex-1 space-y-8">
      <SearchBar/>
      <MarketVisual/>
    </div>
  );
};

export default HomePage;
