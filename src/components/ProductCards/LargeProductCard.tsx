import React, { useEffect, useState } from 'react';
import Product from '../../types/Product';

interface Timer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface FeaturedProductProps {
  product: Product;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  const [timer, setTimer] = useState<Timer>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!product.discountDateEnd) {
      console.warn('discountDateEnd is not defined');
      return;
    }

    const discountEnd = new Date(product.discountDateEnd);
    
    const updateTimer = () => {
      const now = new Date();
      const timeDiff = discountEnd.getTime() - now.getTime();

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        setTimer({ days, hours, minutes, seconds });
      } else {
        setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, [product.discountDateEnd]);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div>
        <div className="bg-gray-100 p-2 rounded">
            <div className="text-xl font-bold text-tbc-primarybrown-600">{value}</div>
        </div>
        <div className="text-sm text-gray-600">{label}</div>
    </div>
  );

  return (
    <div className="relative flex flex-col md:flex-row pt-12 gap-8 px-6 bg-white rounded-sm scale-95 ">
        <div className="w-80 h-96">
            <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover rounded-sm"
            />
        </div>
        {product.discount && (
            <span className="absolute top-10 right-10 bg-tbc-primaryred-600 text-white text-sm font-bold px-2 py-4 rounded-full">
                -{product.discount}%
            </span>
        )}
        <div className="md:w-1/2 grid mt-6">
            <div className='space-y-2'>
                    <h2 className="text-3xl font-bold text-tbc-primaryred-600">{product.name}</h2>
                    <hr className="border-2 border-tbc-secondarygray-600 my-2" />
                    <p className="text-gray-600 ">{product.description}</p>
            </div>
                {product.isLimited && (
                <p className="text-tbc-pilargray-600 text-xl font-bold">¡Edición Limitada!</p>
                )}
            <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-tbc-primaryred-600">USD {product.price}</span>
                {product.originalPrice && (
                    <span className="text-gray-400 line-through">USD {product.originalPrice}</span>
                )}
            </div>
            <button className="w-48 h-8 bg-tbc-primaryred-600 text-white rounded-md hover:bg-tbc-primarybrown-600 transition-colors duration-300 hover:scale-105">
                Agregar al carro
            </button>
            <div className="grid grid-cols-4 gap-4 text-center w-72">
                <TimeBox value={timer.days} label="días" />
                <TimeBox value={timer.hours} label="horas" />
                <TimeBox value={timer.minutes} label="min" />
                <TimeBox value={timer.seconds} label="seg" />
            </div>
        </div>
    </div>
  );
};
export default FeaturedProduct;