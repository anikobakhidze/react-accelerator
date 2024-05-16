// "use client";
import Image from "next/image";
// import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { useShoppingCart } from "@/context/ShoppingCartContext";
// import CartQuantityAdjuster from "../cart/CartQuantityAdjuster";

import Link from "next/link";
import { createCartItemAction } from "@/actions";
import AddToCartBtn from "./AddToCardBtn";
interface IProductCardContainer {
  product: IProduct;
  addCart: string;
}

function ProductCard({ product, addCart }: IProductCardContainer) {
  const { id, title, description, price, thumbnail } = product;
  // const routes = useRouter();
  // const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
  // const quantity = getItemQuantity(id);

  // const handleClick = () => {
  //   redirect(`/products/${id}`);
  // };
  const handleClick = async () => {
    await createCartItemAction(0, id);
  };
  return (
    <div className="rounded-xl w-[300px] flex flex-col items-between h-full">
      <Link href={`/products/${id}`}>
        <div className="w-[300px] h-[150px] relative">
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
      </Link>
      <div className="mt-auto">
        {/* {quantity === 0 ? (
          <button
            className="bg-[#53b1b1] w-full rounded-b-[12px] py-2 text-slate-200 mt-auto transition-all duration-300 hover:bg-[#357070] dark:bg-[#357070] dark:hover:bg-[#53b1b1]"
            onClick={() => increaseCartQuantity(product)}
          >
            + {addCart}
          </button>
        ) : (
          <CartQuantityAdjuster product={product} />
        )} */}
        <AddToCartBtn handleClick={handleClick} addCart={addCart} />
      </div>
    </div>
  );
}

export default ProductCard;
