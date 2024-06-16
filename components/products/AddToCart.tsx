"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { hasUserRole } from "@/utils/userRole";
import { useState } from "react";
import { addToCart } from "@/api";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { CiSquarePlus } from "react-icons/ci";
import { useI18n } from "@/locales/client";

function AddToCart({ product }: { product: IProductDetails }) {
  const { userSub } = product;
  const { user, isLoading } = useUser();
  const sub = user?.sub || "";
  const [loading, setLoading] = useState(isLoading);
  const router = useRouter();
  const t = useI18n();
  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await addToCart(product, sub);
      router.refresh();
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      alert("Failed to add product to cart.");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-black dakr:bg-opacity-80 bg-opacity-80 flex justify-center items-center z-50">
        <ClipLoader size={80} color="#e4986a" />
      </div>
    );
  }

  return (
    <>
      {!user
        ? null
        : sub !== userSub &&
          !(hasUserRole(user) && user.role[0] === "admin") && (
            <button
              className="relative bg-black dark:bg-white dark:text-black py-2 px-2 text-white w-28 overflow-hidden group"
              onClick={handleAddToCart}
              disabled={loading}
            >
              <span className="relative z-10 w-full h-full flex justify-center items-center">
                {" "}
                <CiSquarePlus />
                <span className="ml-2">{t("product.addProduct")}</span>
              </span>
              <span className="absolute left-0 bottom-0 w-full h-full bg-btn-primary-color transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </button>
          )}
    </>
  );
}

export default AddToCart;
