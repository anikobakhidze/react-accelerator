"use client";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import Link from "next/link";
import { hasUserRole } from "../../utils/userRole";
import DeleteProduct from "./DeleteProduct";
import { addToCart } from "@/api";
import { ClipLoader } from "react-spinners";
import ProductImage from "./ProductImage";
function ProductCard({ product }: IProductCard) {
  const { id, title, price, category, usersub } = product;
  const { user, isLoading } = useUser();
  const sub = user?.sub || "";
  const [loading, setLoading] = useState(isLoading);
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    router.push(`/products/${id}`);
  };

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
    <div className="w-[300px] flex flex-col items-between h-full relative group shadow-lg">
      <div onClick={handleClick} className="cursor-pointer">
        <div className="relative">
          <ProductImage image={product.image} title={product.title} />
          <div className="absolute inset-0 bg-black bg-opacity-50 dark:block hidden"></div>
        </div>
        <h3
          className="cursor-pointer hover:text-btn-primary-color duration-300 transition-all text-base md:text-lg font-bold  text-center align-middle text-gray-600 dark:text-white"
          style={{ minHeight: "30px" }}
        >
          {title}
        </h3>
      </div>
      <p className="text-base text-btn-primary-color mb-1 text-center">
        {category}
      </p>
      <p
        className="text-xl font-bold text-center mb-2"
        style={{ minHeight: "30px" }}
      >
        ${price}
      </p>
      <div className="flex items-center justify-center py-2 mt-4 border-t-2 border-t-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {!user
          ? null
          : sub !== usersub &&
            !(hasUserRole(user) && user.role[0] === "admin") && (
              <button
                className="dark:text-white dark:hover:text-btn-primary-color w-10 h-10 text-black flex items-center justify-center font-bold text-lg hover:text-btn-primary-color transition-all duration-300 border-l-2 border-l-gray-200"
                onClick={handleAddToCart}
                disabled={loading}
              >
                <FaCartShopping />
              </button>
            )}
        <button
          onClick={handleClick}
          className="dark:text-white dark:hover:text-btn-primary-color w-10 h-10 text-black flex items-center justify-center font-bold text-lg hover:text-btn-primary-color transition-all duration-300 border-x-2 border-x-gray-200"
          disabled={loading}
        >
          <BsEye />
        </button>
        {(sub === usersub ||
          (hasUserRole(user) && user.role[0] === "admin")) && (
          <Link
            href={`/editproduct/${id}`}
            className="dark:text-white dark:hover:text-btn-primary-color w-10 h-10 text-black flex items-center justify-center font-bold text-lg hover:text-btn-primary-color transition-all duration-300"
          >
            <FiEdit />
          </Link>
        )}
        {(sub === usersub ||
          (hasUserRole(user) && user.role[0] === "admin")) && (
          <button
            onClick={() => setDeleteModal(true)}
            className="dark:text-white dark:hover:text-btn-primary-color w-10 h-10 text-black flex items-center justify-center font-bold text-lg hover:text-btn-primary-color transition-all duration-300 border-x-2 border-x-gray-200"
            disabled={loading}
          >
            <RiDeleteBin5Line />
          </button>
        )}
        {deleteModal && (
          <div>
            <DeleteProduct setDeleteModal={setDeleteModal} id={id} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
