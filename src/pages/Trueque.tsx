import { useState } from 'react';
import Navbar from '../components/Navbar';
import CategoriesSidebar from '../components/Marketplace/Sidebar/CategoriesSidebar';
import Footer from '../components/Footer/Footer';
import TruequeSearchBar from '../components/Marketplace/MarketSearchBar/TruequeSearchBar';
import backgroundImage from '../assets/background-marketplace.svg'
import ChangingView from '../components/Marketplace/Trueque/ChangingView';

const Trueque: React.FC = () => {
  const [selectedPilar, setSelectedPilar] = useState<string>("The Begin");
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");

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
                  <TruequeSearchBar onCategorySelect={setSelectedCategory}/>
                </div>
                <div className='hidden lg:block'>
                  <ChangingView selectedPilar={selectedPilar} selectedCategory={selectedCategory}/>
                </div>    
              </div>
            </div>
            <div className='lg:hidden'>
              <ChangingView selectedPilar={selectedPilar} selectedCategory={selectedCategory}/>
            </div> 
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trueque;
