"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useShoppingCart } from "@/context/ShoppingCartContext";
function ProductCard({
  product: { id, title, description, price, thumbnail },
  addCart,
}: IProductCardContainer) {
  const routes = useRouter();
  const handleClick = () => {
    routes.push(`/products/${id}`);
  };
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className=" rounded-xl w-[300px] flex flex-col items-between h-full ">
      <div onClick={handleClick}>
        <div className="w-[300px] h-[150px] relative object-cover ">
          <Image
            src={thumbnail}
            alt={title}
            className="rounded-t-[12px] mb-2"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
        <h3 className="font-bold text-center text-[#3f3b35] dark:text-white">
          {title}
        </h3>
        <p className="px-8 text-justify text-[#57544c] mt-5 h-[120px] dark:text-white">
          {description}
        </p>
        <p className="px-8 text-medium-green font-bold my-3 dark:text-white">
          {price} USD
        </p>
      </div>
      <div className="mt-auto">
        {quantity === 0 ? (
          <button
            className="bg-[#53b1b1] w-full rounded-b-[12px] py-2 text-slate-200 mt-auto transition-all duration-300 hover:bg-[#357070] dark:bg-[#357070] dark:hover:bg-[#53b1b1]"
            onClick={() => increaseCartQuantity(id)}
          >
            + {addCart}
          </button>
        ) : (
          <div className="flex flex-col gap-4">
            <div className=" flex justify-around items-center">
              <button
                className="bg-blue-600 text-white  px-4 text-xl py-2 hover:bg-blue-800"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <div>
                <span className="fs-3">{quantity}</span> in cart
              </div>
              <button
                className="bg-blue-600 text-white  px-4 text-xl py-2 hover:bg-blue-800"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              className="bg-red-600 text-white rounded-xl p-2"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
      {/* <button className="bg-[#53b1b1] w-full rounded-b-[12px] py-2 text-slate-200 mt-auto transition-all duration-300 hover:bg-[#357070] dark:bg-[#357070] dark:hover:bg-[#53b1b1]">
        {addCart}
      </button> */}
    </div>
  );
}

export default ProductCard;
