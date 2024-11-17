import React, { useEffect, useState } from 'react';
import LargeCards from '../ProductCards/LargeProductCard';
import MediumCards from '../ProductCards/MediumProductCard';
import ExtraSmallCards from '../ProductCards/ExtraSmallProductCard';
import Product from '../../types/Product';
import logo from '../../assets/icons/svg/tb-icon-fill-white.svg'

const Offers: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/deigodd/thebegin-frontend/refs/heads/feature/Market/Update/src/data/Products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error('Error al cargar productos:', error));
    }, []);

    const selectedCategory = true;
    const filteredProducts = selectedCategory
        ? products.filter(product => product.discount)
        : products;

    return (
    <div className="relative grid grid-cols-1 md:gap-5 rounded-md sm:grid-flow-row-dense lg:grid-cols-3">
        <div className='bg-red-600 w-72 absolute h-16 rounded-full z-10 left-0 -top-4'>
        </div>
        <div className="bg-white grid col-span-2 z-20 shadow-lg">
            {filteredProducts.slice(0, 1).map((product) => (
                <LargeCards key={product.id} product={product} />
            ))}

            {/* Contenedor scrolleable para ExtraSmallCards */}
            <div className="flex gap-3 overflow-x-auto lg:overflow-visible">
                {filteredProducts.slice(1, 6).map((product) => (
                    <div className="scale-90"> {/* Ajusta el ancho mínimo */}
                        <ExtraSmallCards key={product.id} product={product} />
                    </div>
                ))}
            </div>
        </div>
        <div className='bg-red-600 w-56 z-30 absolute h-8 rounded-b-full pl-8 font-bold text-white left-8 -top-1'>
            OFERTAS DE HOY
        </div>

        <div className="bg-white shadow-lg">
            <div className='flex bg-purple-300 p-2 pl-4 text-white font-bold text-center'>
            <img src={logo} className='w-12'></img>
                <span className='ml-4 pt-2'>MÁS VENDIDOS</span>
            </div>
            {filteredProducts.slice(5, 9).map((product) => (
                <div className='scale-95'>
                    <MediumCards key={product.id} product={product} />
                </div>
            ))}
        </div>
    </div>
    );
};

export default Offers;
