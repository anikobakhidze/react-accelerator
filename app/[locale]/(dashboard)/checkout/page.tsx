import React from "react";
import { getSession } from "@auth0/nextjs-auth0";
import CheckoutDetails from "../../../../components/checkoutPage/CheckoutDetails";
import { getUserCart } from "@/api";
async function CheckoutPage() {
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  const userEmail = user?.email;
  const products = await getUserCart(userId);
  return (
    <CheckoutDetails
      userId={userId}
      products={products}
      userEmail={userEmail}
    />
  );
}

export default CheckoutPage;
