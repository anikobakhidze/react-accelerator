"use client";
import { FaCartShopping } from "react-icons/fa6";
import { useShoppingCart } from "../../context/ShoppingCartContext";
function AddToCartBtn() {
  const { cartQuantity } = useShoppingCart();
  return (
    <button className="rounded-[50%] w-8 h-8 flex justify-center items-center bg-gray-300 transition-all hover:bg-gray-400 hover:scale-105  dark:bg-white relative">
      <FaCartShopping className="dark:text-black" />
      {cartQuantity > 0 && (
        <div className="absolute bg-red-700 rounded-full w-6 h-6 -right-2 -bottom-2 text-white">
          {cartQuantity}
        </div>
      )}
    </button>
  );
}

export default AddToCartBtn;
