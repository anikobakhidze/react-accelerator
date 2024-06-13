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
    <>
      <ul className="flex flex-wrap justify-center mt-20 max-w-7xl mx-auto gap-6">
        {currentProducts.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}

export default ProductList;
