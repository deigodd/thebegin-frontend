import React, { useEffect, useState } from 'react';
import SmallCards from '../ProductCards/SmallProductCard';
import Product from '../../types/Product';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MarketProducts: React.FC<{ selectedCategory: string | null }> = ({ selectedCategory }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(10);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/deigodd/thebegin-frontend/refs/heads/feature/Market/Update/src/data/Products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error('Error al cargar productos:', error));
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='bg-tbc-secondarybrown-200 rounded-md'>
            <div className="grid grid-cols-2 justify-items-center xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 pb-4">
                {currentProducts.map((product) => (
                    <SmallCards key={product.id} product={product} />
                ))}
            </div>

            {/* Paginación con botones de flechas */}
            <div className="flex bg-tbc-primarybrown-600 justify-center items-center space-x-2 p-2">
                {/* Flecha hacia atrás */}
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-full ${currentPage === 1 ? 'bg-tbc-secondarygray-300 cursor-not-allowed' : 'bg-tbc-primaryred-600 text-white'}`}
                >
                    <ChevronLeft />
                </button>

                {/* Números de página */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-tbc-primaryred-600 text-white' : 'bg-tbc-secondarygray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Flecha hacia adelante */}
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-full ${currentPage === totalPages ? 'bg-tbc-secondarygray-300 cursor-not-allowed' : 'bg-tbc-primaryred-600 text-white'}`}
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default MarketProducts;
