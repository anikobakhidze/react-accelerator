"use client";
import { useShoppingCart } from "@/context/ShoppingCartContext";
function CartQuantityAdjuster({ product }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(product.id);
  return (
    <div className="flex flex-col gap-4 w-72">
      <div className="flex justify-around items-center">
        <button
          className="bg-blue-600 text-white px-4 text-xl py-2 hover:bg-blue-800"
          onClick={() => decreaseCartQuantity(product.id)}
        >
          -
        </button>
        <div>
          <span className="fs-3">{quantity}</span> in cart
        </div>
        <button
          className="bg-blue-600 text-white px-4 text-xl py-2 hover:bg-blue-800"
          onClick={() => increaseCartQuantity(product)}
        >
          +
        </button>
      </div>
      <button
        className="bg-red-600 text-white rounded-xl p-2"
        onClick={() => removeFromCart(product.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default CartQuantityAdjuster;
