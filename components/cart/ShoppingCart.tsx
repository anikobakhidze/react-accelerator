// import getProducts from "@/api/products/getProducts";
"use client";
import { useShoppingCart } from "@/context/ShoppingCartContext";

async function ShoppingCart() {
  const products = await getProducts();
  const { cartQuantity, cartItems } = useShoppingCart();
  console.log(cartItems);

  return (
    <div>
      {cartQuantity === 0 && <div> No Products in cart</div>}
      {products.filter(product)}
    </div>
  );
}

export default ShoppingCart;
