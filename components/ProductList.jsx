"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const products = await response.json();
      setProducts(products.products);
    }
    getProducts();
  }, []);
  return (
    <ul className="grid grid-cols-3 h-screen  gap-y-8 cursor-pointer">
      {products.map((product) => (
        <li
          key={product.id}
          className="mx-auto shadow-md shadow-[#1c5858] rounded-xl max-h-[410px]"
        >
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
