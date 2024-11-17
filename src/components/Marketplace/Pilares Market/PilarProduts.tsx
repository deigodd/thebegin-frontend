import React, { useEffect, useState } from 'react';
import SmallCards from '../../ProductCards/SmallProductCard';
import Product from '../../../types/Product';
import PilarMarketNav from './PilarMarketNav';  // Importamos el Nav

interface PilarProductsProps {
  pilarId: number;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

const PilarProducts: React.FC<PilarProductsProps> = ({ pilarId, colors }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(8);

  // Cargar los productos según el pilar seleccionado
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/deigodd/thebegin-frontend/refs/heads/feature/Market/Update/src/data/Products.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.products.filter((product: Product) => product.pilar === pilarId);
        setProducts(filteredProducts);
      })
      .catch((error) => console.error('Error al cargar productos:', error));
  }, [pilarId]);

  // Productos a mostrar según la página
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Número total de páginas
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Cambiar a la página siguiente
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Cambiar a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <PilarMarketNav
        colors={colors}
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={prevPage}
        onNextPage={nextPage}
      />
      <div className="grid h-7xl grid-cols-2 grid-rows-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentProducts.map((product) => (
          <SmallCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PilarProducts;
