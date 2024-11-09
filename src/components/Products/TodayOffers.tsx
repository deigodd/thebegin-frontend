import React from 'react';
import { Product, Timer } from '../../data/Product';
import { FeaturedProduct } from './FeaturedProduct';
import { ProductCard } from '../Highlighs/ProductCard';

interface TodaysOffersProps {
  featuredProduct: Product;
  timer: Timer;
  discountedProducts: Product[];
}

export const TodaysOffers: React.FC<TodaysOffersProps> = ({
  featuredProduct,
  timer,
  discountedProducts
}) => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold">OFERTAS DE HOY</h2>
      <FeaturedProduct product={featuredProduct} timer={timer} />
      
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4">
            {discountedProducts.map((product) => (
              <div key={product.id} className="w-64 flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

