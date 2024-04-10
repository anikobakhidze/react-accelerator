"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function ProductDetailPage({ params: { productId } }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getProductDetails() {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const product = await response.json();
      setProduct(product);
    }
    getProductDetails();
  }, []);
  console.log(product);
  return (
    <section className="flex flex-1 flex-col  justify-center bg-light-green w-full">
      <h2 className="text-dark-green w-4/5 mx-auto text-3xl font-bold mb-10 first-letter:capitalize my-10">
        {product.category}
      </h2>
      <div className="flex gap-10 w-4/5  mx-auto">
        <div>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-y-4">
            <h3 className="font-bold text-xl mr-10 text-dark-green w-24">
              Title
            </h3>
            <p className="font-semibold text-md ">{product.title}</p>
          </div>
          <div className="flex items-center gap-y-4">
            <h3 className="font-bold text-xl mr-10 text-dark-green w-24">
              Description
            </h3>
            <p className="font-semibold text-md">{product.description}</p>
          </div>
          <div className="flex items-center gap-y-4">
            <h3 className="font-bold text-xl mr-10 text-dark-green w-24">
              Price
            </h3>
            <p className="font-semibold text-md">{product.price}</p>
          </div>
          <div className="flex items-center gap-y-4">
            <h3 className="font-bold text-xl mr-10 text-dark-green w-24">
              Rating
            </h3>
            <p className="font-semibold text-md">{product.rating}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
