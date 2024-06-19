"use client";
import React from "react";
import Image from "next/image";
import CartQuantityAdjuster from "./CartQuantityAdjuster";

function ShoppingItem({ item }) {
  return (
    <div className="flex flex-col md:flex-row border-b border-gray-300 py-4 md:items-center md:justify-center text-center md:text-left">
      <div className=" relative flex-none w-full md:w-1/3 mb-4 md:mb-0 flex justify-center">
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={300}
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 dark:block hidden"></div>
      </div>
      <div className="md:flex-grow ml-0 md:ml-4 flex flex-col items-center md:items-start">
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          ${item.price}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
          {item.category}
        </p>
        <CartQuantityAdjuster item={item} />
      </div>
    </div>
  );
}

export default ShoppingItem;
