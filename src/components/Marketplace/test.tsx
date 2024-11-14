import React, { useEffect, useState } from 'react';
import LargeCards from '../ProductCards/LargeProductCard';
import MediumCards from '../ProductCards/MediumProductCard';
import ExtraSmallCards from '../ProductCards/ExtraSmallProductCard';
import Product from '../../types/Product';

const Test: React.FC = () => {
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
        <div className="relative grid grid-cols-1 rounded-md sm:grid-flow-row-dense sm:space-x-4 lg:grid-cols-3">
        <div className="bg-white grid col-span-2 content-between">
            {filteredProducts.slice(0, 1).map((product) => (
                <LargeCards key={product.id} product={product} />
            ))}

            {/* Contenedor scrolleable para ExtraSmallCards */}
            <div className="flex gap-4 overflow-x-auto lg:overflow-visible">
                {filteredProducts.slice(1, 6).map((product) => (
                    <div className="min-w-[150px]"> {/* Ajusta el ancho mínimo */}
                        <ExtraSmallCards key={product.id} product={product} />
                    </div>
                ))}
            </div>
        </div>

        <div className="">
            {filteredProducts.slice(5, 9).map((product) => (
                <MediumCards key={product.id} product={product} />
            ))}
        </div>
    </div>
    );
};

export default Test;
