import React from "react";
import Image from "next/image";
import AddToCartBtn from "../products/AddToCartBtn";

export default async function ShoppingItem({
  productId,
}: {
  productId: number;
}) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await response.json();
  return (
    <div className="flex">
      {" "}
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
        <AddToCartBtn product={product} />
      </div>
      ;
    </div>
  );
}

// "use client";
// import React from "react";
// import Image from "next/image";
// import { useShoppingCart } from "@/context/ShoppingCartContext";
// import CartQuantityAdjuster from "./CartQuantityAdjuster";
// import AddToCartBtn from "../products/AddToCartBtn";
// function ShoppingItem({ item }) {
//   const { product, quantity } = item;
//   //   const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
//   //     useShoppingCart();
//   return (
//     <div className="flex">
//       <div className="flex-none">
//         <Image
//           src={product.thumbnail}
//           alt={product.title}
//           width={300}
//           height={300}
//         />
//       </div>
//       <div className="flex-grow ml-4">
//         <h1 className="text-xl font-bold">Title</h1>
//         <h2 className="text-lg">{product.title}</h2>
//         <p className="font-semibold">Price</p>
//         <p>{product.price}</p>
//         <p className="font-semibold">Rating</p>
//         <p>{product.rating}</p>

//         <AddToCartBtn product={product} />
//       </div>
//     </div>
//   );
// }

// export default ShoppingItem;
