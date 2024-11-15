import React from 'react';
import Product from '../../types/Product'

interface ProductCardProps {
  product: Product;
}

const ExtraSmallProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, discount, imageUrl } = product;

    return (
        <div 
        className="bg-white rounded-sm px-4 py-5 w-40 transition-transform duration-300 transform hover:scale-105 
         hover:shadow-lg"
        >
            <div className="relative">
                <img 
                src={imageUrl} 
                alt={name} 
                className="w-32 h-32 object-cover mx-auto rounded-t-sm transition-transform duration-300 transform hover:scale-105" 
                />
                {discount && (
                    <span className="absolute -top-2 -right-2 bg-tbc-primaryred-600 text-white text-sm font-bold px-2 py-4 rounded-full">
                        -{discount}%
                    </span>
                )}
            </div>
            <div className="mt-2">
                <h3 className="text-gray-800 text-sm font-medium">{name}</h3>
            </div>
        </div>
    );
};

export default ExtraSmallProductCard;