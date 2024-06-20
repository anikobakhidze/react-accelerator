import React from "react";
import { getSession } from "@auth0/nextjs-auth0";
import CheckoutDetails from "@/components/CheckoutPage/CheckoutDetails";
import { getCartItems } from "@/api";
async function CheckoutPage() {
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  const products = await getCartItems(userId);
  return <CheckoutDetails userId={userId} products={products} />;
}

export default CheckoutPage;
