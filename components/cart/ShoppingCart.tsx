// "use client";
// import { useShoppingCart } from "@/context/ShoppingCartContext";
// import ShoppingItem from "./ShoppingItem";
import { getCartItems } from "@/api";
async function ShoppingCart() {
  // const { cartQuantity, cartItems, resetCart } = useShoppingCart();
  const products = await getCartItems();
  console.log(products);

  return (
    <div>
      <p>shoppingCart</p>
      {/* {cartQuantity === 0 ? (
        <div> No Products in cart</div>
      ) : (
        <button onClick={resetCart}> Reset Cart</button>
      )}
      {cartItems.map((item) => (
        <ShoppingItem key={item.id} item={item} />
      ))} */}
    </div>
  );
}

export default ShoppingCart;
