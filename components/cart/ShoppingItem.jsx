"use client";
import React from "react";
import Image from "next/image";
import CartQuantityAdjuster from "./CartQuantityAdjuster";
function ShoppingItem({ item }) {
  return (
    <div className="flex">
      <div className="flex-none">
        <Image src={item.image} alt={item.title} width={300} height={300} />
      </div>
      <div className="flex-grow ml-4">
        <h1 className="text-xl font-bold">Title</h1>
        <h2 className="text-lg">{item.title}</h2>
        <p className="font-semibold">Price</p>
        <p>{item.price}</p>
        <p className="font-semibold">Category</p>
        <p>{item.category}</p>

        <CartQuantityAdjuster item={item} />
      </div>
    </div>
  );
}

export default ShoppingItem;
