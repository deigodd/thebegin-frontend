import React, { useEffect, useState } from 'react';
import SmallCards from '../ProductCards/SmallProductCard';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    trueque?: boolean;
    discount?: number;
    imageUrl: string;
    rankingSales?: number;
    isLimited?: boolean;
    pilar: number;
    category: string;
}

const MarketProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/deigodd/thebegin-frontend/refs/heads/feature/Products/src/data/Products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error('Error al cargar productos:', error));
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {products.map((product) => (
                <SmallCards key={product.id} product={product} />
            ))}
        </div>
    );
};

export default MarketProducts;
