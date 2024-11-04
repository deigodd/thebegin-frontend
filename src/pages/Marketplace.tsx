import React from 'react';
import UserOptions from '../components/UserOptions';
import Navbar from '../components/Marketplace/MarketNavbar';
import CategoriesSidebar from '../components/CategoriesSidebar';
import HomeContent from '../components/Marketplace/MarketContent';
import Footer from '../components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <UserOptions />
      <Navbar />
      <div className="bg-[#f8f4f0] flex flex-1 p-4 px-10">
        <CategoriesSidebar />
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
