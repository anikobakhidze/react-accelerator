"use client";
import React, { useState } from "react";
import { updateCartQuantityAction } from "@/actions";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ClipLoader } from "react-spinners";
import { useI18n } from "@/locales/client";
function CartQuantityAdjuster({ item }) {
  const t = useI18n();
  const { user } = useUser();
  const [loading, setLoading] = useState({
    increase: false,
    decrease: false,
    remove: false,
  });

  const handleAction = async (actionType) => {
    if (user?.sub) {
      setLoading({ ...loading, [actionType]: true });
      try {
        await updateCartQuantityAction(item.id, user.sub, actionType);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading({ ...loading, [actionType]: false });
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 w-72 items-center md:items-start">
      <div className="flex justify-between items-center w-full">
        <button
          className={`bg-black dark:bg-white dark:text-black hover:opacity-75 rounded-full text-white px-4 text-xl py-2 transition-colors duration-300 ${
            loading.decrease ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleAction("decrease")}
          disabled={loading.decrease}
        >
          {loading.decrease ? <ClipLoader size={15} color="#e4986a" /> : "-"}
        </button>
        <div className="px-2">
          <span className="fs-3">{item.selectedQuantity}</span> in cart
        </div>
        <button
          className={`bg-black dark:bg-white dark:text-black hover:opacity-75 rounded-full text-white px-4 text-xl py-2 transition-colors duration-300 ${
            loading.increase ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleAction("increase")}
          disabled={loading.increase}
        >
          {loading.increase ? <ClipLoader size={15} color="#e4986a" /> : "+"}
        </button>
      </div>
      <button
        className={`bg-btn-primary-color p-2 text-white transition-colors duration-300 w-full hover:opacity-75 ${
          loading.remove ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handleAction("remove")}
        disabled={loading.remove}
      >
        {loading.remove ? (
          <ClipLoader size={20} color="#e4986a" />
        ) : (
          t("cartPage.remove")
        )}
      </button>
    </div>
  );
}

export default CartQuantityAdjuster;
