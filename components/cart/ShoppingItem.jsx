"use client";
import React from "react";
import Image from "next/image";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import CartQuantityAdjuster from "./CartQuantityAdjuster";
function ShoppingItem({ item }) {
  const { product, quantity } = item;
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  return (
    <div className="flex">
      <div className="flex-none">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
        />
      </div>
      <div className="flex-grow ml-4">
        <h1 className="text-xl font-bold">Title</h1>
        <h2 className="text-lg">{product.title}</h2>
        <p className="font-semibold">Price</p>
        <p>{product.price}</p>
        <p className="font-semibold">Rating</p>
        <p>{product.rating}</p>

        <CartQuantityAdjuster product={product} />
      </div>
    </div>
  );
}

export default ShoppingItem;
