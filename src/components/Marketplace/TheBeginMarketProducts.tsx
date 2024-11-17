import React, { useEffect, useState } from 'react';
import TheBeginCard from '../ProductCards/TheBeginCard';
import Product from '../../types/Product';

const MarketProducts: React.FC<{ selectedCategory: number | null }> = ({ selectedCategory }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/deigodd/thebegin-frontend/refs/heads/feature/Market/Update/src/data/Products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error('Error al cargar productos:', error));
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.pilar === selectedCategory)
        : products;

    return (
        <div className='grid grid-cols-4 grid-rows-2 bg-tbc-secondarybrown-200'>
            <div className="col-span-3 row-span-3">
                {filteredProducts.slice(0,1).map((product) => (
                    <TheBeginCard key={product.id} product={product} />
                ))}
            </div>
            <div className="h-40 sm:h-80">
                {filteredProducts.slice(1,3).map((product) => (
                    <TheBeginCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default MarketProducts;
