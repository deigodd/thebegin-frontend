import React from 'react';
import Product from '../../types/Product'

interface ProductCardProps {
  product: Product;
}

const SmallProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, price, originalPrice, discount, imageUrl } = product;

    return (
        <div 
        className="bg-white rounded-sm shadow-md px-4 py-5 w-56 md:w-64 scale-90 transition-transform duration-300 transform hover:scale-90 
        sm:hover:scale-105 hover:shadow-lg sm:scale-95"
        >
            <div className="relative">
                <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-64 object-cover rounded-t-sm transition-transform duration-300 transform hover:scale-105" 
                />
                {discount && (
                    <span className="absolute -top-2 -right-2 bg-tbc-primaryred-600 text-white text-sm font-bold px-2 py-4 rounded-full">
                        -{discount}%
                    </span>
                )}
            </div>
            <div className="mt-2">
                <h3 className="text-gray-800 text-lg font-medium">{name}</h3>
                <div className="mt-1 text-tbc-primaryred-600 font-semibold text-xl">
                    USD {price}
                    {originalPrice && (
                        <span className="text-tbc-secondarygray-600 text-sm line-through ml-2">
                            USD {originalPrice}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SmallProductCard;