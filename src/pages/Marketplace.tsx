import React from 'react';
import Navbar from '../components/Navbar';
import CategoriesSidebar from '../components/CategoriesSidebar';
import MarketContent from '../components/Marketplace/MarketContent';
import Footer from '../components/Footer/Footer';
import PilarTemplate from '../components/Marketplace/Pilares Market/PilarTemplate';
import PilarTemplate2 from '../components/Marketplace/Pilares Market/PilarTemplate2';
import MarketProducts from '../components/Marketplace/MarketProduts';

const Marketplace: React.FC = () => {
  return (
    <div className="bg-[#f8f4f0] flex flex-col min-h-screen">
      <Navbar />
      <div className="flex justify-around space-x-8 items-start flex-col md:flex-row flex-1 p-1 md:p-4 md:px-10">
        <div className="">
          <CategoriesSidebar />
        </div>
        <div className="flex flex-col grow space-y-4">
          <MarketContent />
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:p-4 md:px-10">
          <MarketProducts />
          <PilarTemplate pilarId={1} />
          <PilarTemplate2 pilarId={2} />
          <PilarTemplate pilarId={3} />
          <PilarTemplate2 pilarId={4} />
          <PilarTemplate pilarId={5} />
        </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
