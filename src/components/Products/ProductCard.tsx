import React from 'react';
import { Product } from '../../data/Product';
import Card from './Card';

//Cards de productos
interface ProductCardProps {
    product: Product;
  }

  export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const discountedPrice = product.price;
    const discount = product.discount || 0;
  
    return (
      <Card className="w-full max-w-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="p-0">
          <div className="relative">
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            {discount > 0 && (
              <div className="absolute top-3 right-3 bg-[#B25D43] text-white px-3 py-1 rounded-full text-sm font-medium">
                -{discount}%
              </div>
            )}
          </div>
          
          <div className="p-4 space-y-3">
            <h3 className="text-lg font-serif text-[#8B4513]">{product.name}</h3>
            {/* <p className="text-sm text-gray-600 font-light leading-relaxed">{product.description}</p> */}
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-[#B25D43]">USD {discountedPrice}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  USD {product.originalPrice}
                </span>
              )}
            </div>
            
          </div>
        </div>
      </Card>
    );
  };