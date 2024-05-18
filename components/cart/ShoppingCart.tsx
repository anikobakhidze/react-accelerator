import { getCartItems } from "@/api";
import React from "react";
import ShoppingItem from "./ShoppingItem";
import ResetBtn from "./ResetBtn";
import { userId } from "@/api";

interface Item {
  id: number;
  userid: number;
  quantity: number;
  productid: number;
}
export const revalidate = 0;
export default async function ShoppingCart() {
  const cartItems = await getCartItems(userId);
  console.log(cartItems);
  return (
    <>
      <ResetBtn />
      <div>
        {cartItems.map((item: Item) => (
          <ShoppingItem key={item.productid} productId={item.productid} />
        ))}
      </div>
    </>
  );
}
