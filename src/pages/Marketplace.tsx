import { useState } from 'react';
import Navbar from '../components/Navbar';
import CategoriesSidebar from '../components/Marketplace/Sidebar/CategoriesSidebar';
import Footer from '../components/Footer/Footer';
import MarketProducts from '../components/Marketplace/MarketProduts';
import MarketSearchBar from '../components/Marketplace/MarketSearchBar/MarketSearchBar';
import MarketVisual from '../components/Marketplace/MarketVisual';
import backgroundImage from '../assets/background-marketplace.svg'
import Offers from '../components/Marketplace/Offers'
import ChangingView from '../components/Marketplace/ChangingView';

const Marketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPilar, setSelectedPilar] = useState<string>("The Begin");

  return (
    <div className='bg-[#f8f4f0]'
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Navbar />
      <div className='flex'>
          <div className="flex flex-col mx-auto justify-self-center w-full 2xl:translate-x-32 md:max-w-7xl lg:mt-2">
            <div className="hidden sm:block absolute -translate-x-full w-64">
              <CategoriesSidebar onCategorySelect={setSelectedPilar}/>
            </div>
            <div className='flex lg:space-x-1 w-full'>
              <div className="2xl:hidden">
                <CategoriesSidebar onCategorySelect={setSelectedPilar}/>
              </div>
              <div className="flex-1">
                <div className='z-30'>
                  <MarketSearchBar onCategorySelect={setSelectedCategory}/>
                </div>
                <div className='hidden lg:block'>
                  <ChangingView selectedPilar={selectedPilar}/>
                </div>    
              </div>
            </div>
            <div className='lg:hidden'>
              <ChangingView selectedPilar={selectedPilar}/>
            </div> 
            <div className='flex flex-col space-y-8 mt-8'>
              <Offers/>
              <MarketVisual/> 
              <MarketProducts selectedCategory={selectedCategory}/>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
