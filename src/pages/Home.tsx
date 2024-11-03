import React from 'react';
import Navbar from '../components/Navbar';
import CategoriesSidebar from '../components/CategoriesSidebar';
import HomeContent from '../components/HomePage';
import Footer from '../components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <CategoriesSidebar />
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
