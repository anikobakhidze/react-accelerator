"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useShoppingCart } from "@/context/ShoppingCartContext";
// import CartQuantityAdjuster from "../cart/CartQuantityAdjuster";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
// import EditProductsBtn from "./EditProductsBtn";
import Link from "next/link";
import { hasUserRole } from "../../utils/userRole";
import DeleteProduct from "./DeleteProduct";
import { addToCart } from "@/api";
function ProductCard({ product, addCart }: IProductCardContainer) {
  const { id, title, description, price, image, quantity, category, usersub } =
    product;
  const { user, isLoading } = useUser();
  const sub = user?.sub || "";
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
    }
  }, [isLoading]);

  const routes = useRouter();
  // const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
  // const quantity = getItemQuantity(id);

  const handleClick = () => {
    routes.push(`/products/${id}`);
  };

  if (loading && isLoading) {
    return <div className="loader">Loading...</div>;
  }
  const handleAddToCart = async () => {
    try {
      await addToCart(product, sub);
      router.refresh();
      // alert("Product added to cart!");
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <div className="rounded-xl w-[300px] flex flex-col items-between h-full">
      <div onClick={handleClick}>
        <div className="w-[300px] h-[150px] relative">
          <Image
            src={image}
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
        <p className="px-8 text-medium-green font-bold my-3 dark:text-white">
          {quantity}
        </p>
        <p className="px-8 text-medium-green font-bold my-3 dark:text-white">
          {category}
        </p>
      </div>
      <div className="mt-auto">
        {/* {quantity === 0 ? ( */}
        {user && (
          <button
            className="bg-[#53b1b1] w-full rounded-b-[12px] py-2 text-slate-200 mt-auto transition-all duration-300 hover:bg-[#357070] dark:bg-[#357070] dark:hover:bg-[#53b1b1]"
            onClick={handleAddToCart}
          >
            + {addCart}
          </button>
        )}
        {/* ) : (
          <CartQuantityAdjuster product={product} />
        )} */}
        {/* <EditProductsBtn usersub={usersub} id={id} />
         */}
        {(sub === usersub ||
          (hasUserRole(user) && user.role[0] === "admin")) && (
          <Link href={`/editproduct/${id}`}>
            Edit
            <FiEdit />
          </Link>
        )}
        {(sub === usersub ||
          (hasUserRole(user) && user.role[0] === "admin")) && (
          <RiDeleteBin5Line onClick={() => setDeleteModal(true)} />
        )}
        {deleteModal && (
          <DeleteProduct setDeleteModal={setDeleteModal} id={id} />
        )}
      </div>
    </div>
  );
}

export default ProductCard;
