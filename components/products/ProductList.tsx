"use client";
import ProductCard from "./ProductCard";
import Pagination from "../sharedComponents/UI/Pagination";
import { useState } from "react";

function ProductList({ products }: IProductsContainer) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const totalPages = Math.ceil(products.length / productsPerPage);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="flex flex-col items-center w-full py-10">
      <div className="w-11/12 max-w-7xl mx-auto">
        <ul
          className="grid max-680:grid-cols-1 max-980:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-20 
         place-items-center"
        >
          {currentProducts.map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}

export default ProductList;
