import Product from '../../types/Product'
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import PopUpCard from './PopUpCard';

interface ProductCardProps {
    product: Product;
  }

const TheBeginCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, price, originalPrice, discount, imageUrl } = product;
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);


    return (
    <div className='h-full w-full'>
        <div className="relative group bg-white w-full h-full overflow-hidden" onClick={handleOpenPopup} >
            <div className="grid object-cover w-full h-full group-hover:translate-y-[-70%] sm:group-hover:translate-y-[-30%] transition-transform duration-500 ease-in-out"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                {discount && (
                    <span className="absolute -top-2 -right-2 bg-tbc-primaryred-600 text-white text-sm font-bold px-2 py-4 rounded-full">
                        -{discount}%
                    </span>
                )}
                <div className="bg-tbc-secondarybrown-200 rounded-lg sm:px-4 w-full h-36 translate-y-full group-hover:scale-90 duration-700 ease-in-out self-end">
                    <div className="sm:mt-2 scale-75 sm:scale-100">
                        <h3 className="text-gray-800 text-md font-small xs:font-medium">{name}</h3>
                        <div className="mt-1 text-tbc-primaryred-600 font-semibold text-lg">
                            USD {price}
                            {originalPrice && (
                                <span className="text-tbc-secondarygray-600 text-sm line-through ml-2">
                                    USD {originalPrice}
                                </span>
                            )}
                        </div>
                    </div>
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
    )
}
export default TheBeginCard;