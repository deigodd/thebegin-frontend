import React, { useState } from 'react';
import Product from '../../../types/Product';
import PopUpCard from './PopUpTruequeCard';
import ReactDOM from 'react-dom';

interface ProductCardProps {
  product: Product;
}

const SmallTruequeCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, imageUrl } = product;
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);

    return (
        <div>
            <div
                onClick={handleOpenPopup}
                className="bg-white rounded-sm shadow-md px-4 py-5 w-56 md:w-64 scale-90 transition-transform duration-300 transform hover:scale-90 
                sm:hover:scale-105 hover:shadow-lg sm:scale-95"
            >
                <div className="relative">
                    <img 
                        src={imageUrl} 
                        alt={name} 
                        className="w-full h-64 object-cover rounded-t-sm transition-transform duration-300 transform hover:scale-105" 
                    />
                </div>
                <div className="mt-2">
                    <h3 className="text-gray-800 text-lg font-medium">{name}</h3>
                    <div className="mt-1 text-tbc-primaryred-600 font-semibold text-xl">
                        Trueque
                    </div>
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

export default SmallTruequeCard;
