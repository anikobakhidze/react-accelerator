// import getProducts from "@/api/products/getProducts";
"use client";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import ShoppingItem from "./ShoppingItem";
function ShoppingCart() {
  const { cartQuantity, cartItems, resetCart } = useShoppingCart();

  return (
    <div>
      {cartQuantity === 0 ? (
        <div> No Products in cart</div>
      ) : (
        <button onClick={resetCart}> Reset Cart</button>
      )}
      {cartItems.map((item) => (
        <ShoppingItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ShoppingCart;
