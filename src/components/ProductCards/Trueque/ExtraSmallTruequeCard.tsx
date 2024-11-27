import React, { useState } from 'react';
import Product from '../../../types/Product'
import ReactDOM from 'react-dom';
import PopUpCard from './PopUpTruequeCard';

interface ProductCardProps {
  product: Product;
}

const ExtraSmallTruequeCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, imageUrl } = product;
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);


    return (
        <div>
            <div 
            className="bg-white rounded-sm px-4 py-5 w-40 transition-transform duration-300 transform hover:scale-105 
            hover:shadow-lg"
            onClick={handleOpenPopup} 
            >
                <div className="relative">
                    <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-32 h-32 object-cover mx-auto rounded-t-sm transition-transform duration-300 transform hover:scale-105" 
                    />
                </div>
                <div className="mt-2">
                    <h3 className="text-gray-800 text-sm font-medium">{name}</h3>
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

export default ExtraSmallTruequeCard;