import React from 'react';
import Product from '../../types/Product';

interface ProductCardProps {
    product: Product;
}

const MediumProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, price, originalPrice, discount, imageUrl } = product;

    return (
        <div className="bg-white rounded-sm shadow-md flex px-4 py-5 w-full max-w-lg 
        transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <img 
                src={imageUrl} 
                alt={name} 
                className="w-1/3 h-32 object-cover rounded-l-sm transition-transform duration-300 transform hover:scale-105" 
            />
            <div className="flex-1 ml-4">
                <h3 className="text-gray-800 text-lg font-medium">{name}</h3>
                <div className="mt-1 text-tbc-primaryred-600 font-semibold text-xl">
                    USD {price}
                    {originalPrice && (
                        <span className="text-tbc-secondarygray-600 text-sm line-through ml-2">
                            USD {originalPrice}
                        </span>
                    )}
                </div>
                {discount && (
                    <span className="text-tbc-primaryred-600 font-bold text-sm">
                        -{discount}%
                    </span>
                )}
            </div>
        </div>
    );
};

export default MediumProductCard;
