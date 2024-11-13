import React, { useEffect, useState } from 'react';
import SmallCards from '../ProductCards/SmallProductCard';
import Product from '../../types/Product';

const MarketProducts: React.FC<{ selectedCategory: string | null }> = ({ selectedCategory }) => {
    const [products, setProducts] = useState<Product[]>([]);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/deigodd/thebegin-frontend/refs/heads/feature/Market/Update/src/data/Products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error('Error al cargar productos:', error));
    }, []);

    return (
        <div className="grid grid-cols-2 justify-items-center xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3">
            {filteredProducts.map((product) => (
                <SmallCards key={product.id} product={product} />
            ))}
        </div>
    );
};

export default MarketProducts;
