import React, { useState } from 'react';
import Product from '../../types/Product';
import ReactDOM from 'react-dom';
import PopUpCard from './PopUpCard';

interface ProductCardProps {
    product: Product;
}

const MediumProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, price, originalPrice, discount, imageUrl } = product;
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);


    return (
    <div>
        <div className="bg-white rounded-sm flex px-4 py-5 w-full max-w-lg 
        transition-transform duration-300 transform hover:scale-105 hover:shadow-lg" onClick={handleOpenPopup} >
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
        {isPopupOpen && ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-tbc-primaryred-600 bg-opacity-50">
            <div className="relative mr-80 md:mr-96 mb-96 scale-90">
                <PopUpCard product={product} />
                <button 
                    onClick={handleClosePopup} 
                    className="bg-tbc-primarybrown-500 w-10 h-10 rounded-full absolute top-0 right-0 text-white text-xl font-bold"
                >
                    ×
                </button>
            </div>
        </div>,
        document.body
        )}
    </div>
    );
};

export default MediumProductCard;
