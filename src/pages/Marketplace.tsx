import React from 'react';
import Navbar from '../components/Navbar';
import CategoriesSidebar from '../components/Marketplace/Sidebar/CategoriesSidebar';
import Footer from '../components/Footer/Footer';
import PilarTemplate from '../components/Marketplace/Pilares Market/PilarTemplate';
import PilarTemplate2 from '../components/Marketplace/Pilares Market/PilarTemplate2';
import MarketProducts from '../components/Marketplace/MarketProduts';
import SearchBar from '../components/SearchBar/SearchBar';
import MarketVisual from '../components/Marketplace/MarketVisual';

const Marketplace: React.FC = () => {
  return (
    <div className='bg-[#f8f4f0]'>
      <Navbar />
        <div className="flex flex-col justify-self-center w-full md:max-w-7xl md:mt-1">
          <div className='flex md:space-x-1 w-full'>
            <div className="">
              <CategoriesSidebar />
            </div>
            <div className="flex-1">
              <SearchBar/>
              <div className='hidden md:block'>
                <MarketVisual/> 
              </div>         
            </div>
          </div>
          <div className='w-full md:hidden'>
            <MarketVisual/>  
          </div>
          <div className='flex flex-col space-y-8 mt-8'>
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
