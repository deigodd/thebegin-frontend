import { useState } from 'react';
import Navbar from '../components/Navbar';
import CategoriesSidebar from '../components/Marketplace/Sidebar/CategoriesSidebar';
import Footer from '../components/Footer/Footer';
import PilarTemplate from '../components/Marketplace/Pilares Market/PilarTemplate';
import PilarTemplate2 from '../components/Marketplace/Pilares Market/PilarTemplate2';
import MarketProducts from '../components/Marketplace/MarketProduts';
import MarketSearchBar from '../components/Marketplace/MarketSearchBar/MarketSearchBar';
import MarketVisual from '../components/Marketplace/MarketVisual';
import backgroundImage from '../assets/background-marketplace.svg'
import Offers from '../components/Marketplace/Offers'


const Marketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className='bg-[#f8f4f0]'
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Navbar />
        <div className="flex flex-col mx-auto justify-self-center w-full md:max-w-7xl md:mt-1">
          <div className='flex md:space-x-1 w-full'>
            <div className="">
              <CategoriesSidebar />
            </div>
            <div className="flex-1">
              <div className='z-30'>
                <MarketSearchBar onCategorySelect={setSelectedCategory}/>
              </div>
              <div className='hidden md:block z-10'>
                <MarketVisual/> 
              </div>         
            </div>
          </div>
          <div className='w-full md:hidden'>
            <MarketVisual/>  
          </div>
          <div className='flex flex-col space-y-8 mt-8'>
            <Offers/>
            <MarketProducts selectedCategory={selectedCategory}/>
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
