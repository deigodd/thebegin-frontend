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
    <div className='bg-[#f8f4f0]'>
      <Navbar />
        <div className="flex flex-col justify-self-center w-full md:max-w-7xl p-1">
          <div className='flex flex-col space-x-1 w-full md:flex-row'>
            <div className="">
              <CategoriesSidebar />
            </div>
            <div className="flex-1">
              <MarketContent />
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <MarketProducts />
            <PilarTemplate pilarId={1} />
            <PilarTemplate2 pilarId={2} />
            <PilarTemplate pilarId={3} />
            <PilarTemplate2 pilarId={4} />
            <PilarTemplate pilarId={5} />
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
