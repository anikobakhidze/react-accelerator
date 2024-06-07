"use client";
import { updateCartQuantityAction } from "@/actions";
import { useUser } from "@auth0/nextjs-auth0/client";

function CartQuantityAdjuster({ item }) {
  const { user } = useUser();

  const handleIncrease = async () => {
    if (user?.sub) {
      await updateCartQuantityAction(item.id, user.sub, "increase");
    }
  };

  const handleDecrease = async () => {
    if (user?.sub) {
      await updateCartQuantityAction(item.id, user.sub, "decrease");
    }
  };
  const handleRemove = async () => {
    if (user?.sub) {
      await updateCartQuantityAction(item.id, user.sub, "remove");
    }
  };
  return (
    <div className="flex flex-col gap-4 w-72">
      <div className="flex justify-around items-center">
        <button
          className="bg-blue-600 text-white px-4 text-xl py-2 hover:bg-blue-800"
          onClick={handleDecrease}
        >
          -
        </button>
        <div>
          <span className="fs-3">{item.selectedQuantity}</span> in cart
        </div>
        <button
          className="bg-blue-600 text-white px-4 text-xl py-2 hover:bg-blue-800"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <button
        className="bg-red-600 text-white rounded-xl p-2"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
}

export default CartQuantityAdjuster;
