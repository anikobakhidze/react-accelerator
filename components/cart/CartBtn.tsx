"use client";
import { FaCartShopping } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/cartProvider";
function CartBtn() {
  const { totalQuantity } = useCart();

  const routes = useRouter();
  const handleClick = () => {
    routes.push("/cart");
  };
  return (
    <button
      className="rounded-[50%] w-8 h-8 flex justify-center items-center bg-gray-300 transition-all hover:bg-gray-400 hover:scale-105  dark:bg-white relative"
      onClick={handleClick}
    >
      <FaCartShopping className="dark:text-black" />
      {totalQuantity > 0 && (
        <div className="absolute bg-red-700 rounded-full w-6 h-6 -right-2 -bottom-2 text-white">
          {totalQuantity}
        </div>
      )}
    </button>
  );
}

export default CartBtn;
