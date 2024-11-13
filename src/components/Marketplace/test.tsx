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

    const selectedCategory = "Producto";
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <div className="bg-tbc-secondarybrown-200 rounded-md">
            <div className="">
                {filteredProducts.map((product) => (
                    product.id === 1 ? (
                        <LargeCards key={product.id} product={product} />
                    ) : null
                ))}
                {filteredProducts.map((product) => (
                    product.id === 3 ? (
                        <MediumCards key={product.id} product={product} />
                    ) : null
                ))}
                {filteredProducts.map((product) => (
                    product.id === 3 ? (
                        <ExtraSmallCards key={product.id} product={product} />
                    ) : null
                ))}
            </div>
        </div>
    );
};

export default Test;
