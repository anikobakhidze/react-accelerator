"use client";
import React from "react";
import { useState } from "react";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import productList from "../data/productsList";
function HomePageContainer() {
  const [sortProducts, setSortProducts] = useState(productList);
  const [sortOrderAsc, setSortOrderAsc] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
    setSortOrderAsc((prevSortOrderAsc) => !prevSortOrderAsc);
    setSortProducts((prevProducts) =>
      sortOrderAsc
        ? [...prevProducts].sort((a, b) => a.price - b.price)
        : productList
    );
  };
  return (
    <section className="overflow-auto w-4/5 mx-auto py-10 ">
      <SearchBar
        onClick={handleClick}
        setSortProducts={setSortProducts}
        productList={productList}
      />
      <h2 className="text-xl font-bold mb-12 ">
        Innovate Your Life with the iPhone Series
      </h2>
      <ProductList sortProducts={sortProducts} />
    </section>
  );
}

export default HomePageContainer;
