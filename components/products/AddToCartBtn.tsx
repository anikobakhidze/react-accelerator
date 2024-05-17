"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cartProvider";
function AddToCartBtn({ product, addCart }: IProductCardContainer) {
  const { getItemQuantity, increaseCartQuantity } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleClick = async (id: number) => {
    await increaseCartQuantity(id);
  };
  useEffect(() => {
    const fetchQuantity = async () => {
      const qty = await getItemQuantity(product.id);
      setQuantity(qty);
    };

    fetchQuantity();
  }, [product.id, getItemQuantity]);
  return (
    <div>
      {quantity > 0 ? (
        <div className="flex flex-col gap-4 w-72">
          <div className="flex justify-around items-center">
            <button
              className="bg-blue-600 text-white px-4 text-xl py-2 hover:bg-blue-800"
              // onClick={() => decreaseCartQuantity(product.id)}
            >
              -
            </button>
            <div>
              <span className="fs-3">{quantity}</span> in cart
            </div>
            <button
              className="bg-blue-600 text-white px-4 text-xl py-2 hover:bg-blue-800"
              // onClick={() => increaseCartQuantity(product)}
            >
              +
            </button>
          </div>
          <button
            className="bg-red-600 text-white rounded-xl p-2"
            // onClick={() => removeFromCart(product.id)}
          >
            Remove
          </button>
        </div>
      ) : (
        <button
          className="bg-[#53b1b1] w-full rounded-b-[12px] py-2 text-slate-200 mt-auto transition-all duration-300 hover:bg-[#357070] dark:bg-[#357070] dark:hover:bg-[#53b1b1]"
          onClick={() => handleClick(product.id)}
        >
          + {addCart}
        </button>
      )}
    </div>
  );
}

export default AddToCartBtn;
