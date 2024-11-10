import React from 'react';

interface ProductCardProps {
  product: Product;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // precio actual
  originalPrice?: number;
  trueque?: boolean; // si se puede intercambiar es true
  discount?: number;
  imageUrl: string;
  rankingSales?: number; // raking basado en cuanto se ha vendido
  isLimited?: boolean;
  pilar: number; // son nuestras categorias 1-5
  category: string; // categoria producto (servicio, producto, etc)
}

const SmallProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { name, price, originalPrice, discount, imageUrl } = product;

    return (
        <div className="border rounded-lg shadow-md p-4 w-64">
            <div className="relative">
                <img src={imageUrl} alt={name} className="w-full h-32 object-cover rounded-t-lg" />
                {discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        -{discount}%
                    </span>
                )}
            </div>
            <div className="mt-2">
                <h3 className="text-gray-800 text-lg font-medium">{name}</h3>
                <div className="mt-1 text-gray-900 font-semibold text-xl">
                    USD {price}
                    {originalPrice && (
                        <span className="text-gray-500 text-sm line-through ml-2">
                            USD {originalPrice}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SmallProductCard;
