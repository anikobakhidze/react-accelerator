"use client";
import ProductList from "../products/ProductList";
import SearchBar from "../sharedComponents/UI/SearchBar";
import React, { useState } from "react";
function HomePageContainer({ products }: IProductsContainer) {
  const [sortProducts, setSortProducts] = useState(products);
  return (
    <section className="overflow-auto w-4/5 mx-auto py-10 ">
      <SearchBar setSortProducts={setSortProducts} products={products} />

      <ProductList products={sortProducts} />
    </section>
  );
}

export default HomePageContainer;
