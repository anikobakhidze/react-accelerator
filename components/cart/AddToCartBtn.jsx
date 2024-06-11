// "use client";
import { getSession } from "@auth0/nextjs-auth0";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { getQuantityAction } from "@/actions";

async function AddToCartBtn() {
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  let quantity = 0;

  if (userId) {
    quantity = await getQuantityAction(userId);
  }

  return (
    <>
      {user && (
        <Link
          href="/cart"
          className="rounded-[50%] w-6 h-6 md:w-8 md:h-8 flex justify-center items-center bg-btn-primary-color transition-all hover:opacity-75 hover:scale-105 relative"
        >
          <FaCartShopping className="text-white" />
          {quantity > 0 && (
            <div className="absolute bg-light-green-color rounded-full w-4 h-4 text-[10px] md:text-lg md:w-6 md:h-6 -right-2 -bottom-2 text-white flex justify-center items-center  ">
              {quantity}
            </div>
          )}
        </Link>
      )}
    </>
  );
}

export default AddToCartBtn;
