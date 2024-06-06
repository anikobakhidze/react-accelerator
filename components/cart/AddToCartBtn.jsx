// "use client";
import { getSession } from "@auth0/nextjs-auth0";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { getQuantityAction } from "@/actions";

async function AddToCartBtn() {
  const session = await getSession();
  const user = session?.user;
  const userId = user.sub;
  const quantity = await getQuantityAction(userId);
  return (
    <Link
      href="/cart"
      className="rounded-[50%] w-8 h-8 flex justify-center items-center bg-gray-300 transition-all hover:bg-gray-400 hover:scale-105  dark:bg-white relative"
    >
      <FaCartShopping className="dark:text-black" />
      <div className="absolute bg-red-700 rounded-full w-6 h-6 -right-2 -bottom-2 text-white">
        {quantity}
      </div>
    </Link>
  );
}

export default AddToCartBtn;
