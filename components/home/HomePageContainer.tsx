"use client";
import ProductList from "../products/ProductList";
import SearchBar from "../sharedComponents/UI/SearchBar";
import React, { useState } from "react";
function HomePageContainer({ products }: IProductsContainer) {
  const [sortProducts, setSortProducts] = useState(products);
  const [sortOrderAsc, setSortOrderAsc] = useState(true);
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSortOrderAsc((prevSortOrderAsc) => !prevSortOrderAsc);
    setSortProducts(
      sortOrderAsc ? [...products].sort((a, b) => a.price - b.price) : products
    );
  };

  return (
    <section className="overflow-auto w-4/5 mx-auto py-10 ">
      <SearchBar
        onClick={handleClick}
        setSortProducts={setSortProducts}
        products={products}
      />

      <ProductList products={sortProducts} />
    </section>
  );
}

export default HomePageContainer;
