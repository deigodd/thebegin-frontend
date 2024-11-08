import React, { useState } from 'react';
import Match from '../components/Match';
import UserOptions from '../components/UserOptions';
import Navbar from '../components/Marketplace/MarketNavbar';
import Banner from '../components/Match/Banner';
import { SearchBar2 } from '../components/SearchBar/SearchBar2';
import { ActivityHeader } from '../components/Match/ActivityHeader';
import Footer2 from '../components/Footer2';


const Activity: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f4f0]">
      <UserOptions />
      <Navbar />
      
      <div className="flex-1">
        {/* Banner Section */}
        <Banner/>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-5">
          {/* Search Bar */}
          <SearchBar2 onSearch={handleSearch} />

          {/* Activity Header */}
          <ActivityHeader matchCount={850} />

          {/* Matches Grid */}
          <div className="flex flex-col md:flex-row flex-1">
            <div className="w-full">
              <Match searchQuery={searchQuery} />
            </div>
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  );
};

export default Activity;