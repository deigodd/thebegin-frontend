import { FeaturedProduct, ProductCard, SectionTitle } from '../components/Highlighs/ProductCard';
import { mockData } from '../components/Highlighs/Product';
import Footer2 from '../components/Footer2';
import Navbar from '../components/Marketplace/MarketNavbar';
import UserOptions from '../components/UserOptions';

//Pag Semana de Destacados

const Highlight = () => {
  return (

    <div className="min-h-screen bg-[#FDF8F6]">
      <UserOptions />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center mb-12">
          <span className="text-[#666666] font-light text-3xl">Semana de</span>
          <span className="block text-[#8B4513] font-serif text-4xl">DESTACADOS</span>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl p-6">
              <SectionTitle title="OFERTAS DE HOY" iconColor="bg-[#B25D43]" />
              <div className="space-y-8">
                <FeaturedProduct 
                  product={mockData.featuredProduct} 
                  timer={mockData.timer} 
                />
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex gap-4 pb-4">
                    {mockData.discountedProducts.map((product) => (
                      <div key={product.id} className="w-64 flex-shrink-0">
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl p-6">
              <SectionTitle title="LOS MÁS VENDIDOS" iconColor="bg-[#DEB887]" />
              <div className="space-y-4">
                {mockData.bestSellers.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Highlight;