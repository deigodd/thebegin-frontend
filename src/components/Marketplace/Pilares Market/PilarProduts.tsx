import React, { useEffect, useState } from 'react';
import SmallCards from '../../ProductCards/SmallProductCard';

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
interface PilarProductsProps {
    pilarId: number;
  }

const PilarProducts: React.FC<PilarProductsProps> = ({pilarId}) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/deigodd/thebegin-frontend/refs/heads/feature/Products/src/data/Products.json')
            .then((response) => response.json())
            .then((data) => {
                const filteredProducts = data.products.filter((product: Product) => product.pilar === pilarId);
                setProducts(filteredProducts);
            })
            .catch((error) => console.error('Error al cargar productos:', error));
    }, []);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <SmallCards key={product.id} product={product} />
            ))}
        </div>
    );
};

export default PilarProducts;
