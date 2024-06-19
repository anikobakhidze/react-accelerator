"use client";

import React, { useState, useRef } from "react";
import { editProductAction } from "@/actions";
import { useRouter } from "next/navigation";
import BackButton from "../sharedComponents/UI/BackBtn";
import { ImSpinner9 } from "react-icons/im";
import ProductImage from "./ProductImage";
import SuccessModalPages from "../sharedComponents/UI/SuccessModalPages";
import { useI18n } from "@/locales/client";
function EditProductForm({
  productDetails,
}: {
  productDetails: IProductDetails;
}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [product, setProduct] = useState(productDetails);
  const [initialProduct, setInitialProduct] = useState(productDetails);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const t = useI18n();

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];

    setImageLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/upload?filename=${file.name}`,
        {
          method: "POST",
          body: file,
        }
      );

      if (!response.ok) {
        throw new Error(t("editProduct.failMessage"));
      }

      const newBlob = await response.json();
      setProduct((prev) => ({ ...prev, image: newBlob.url }));
    } catch (error) {
      console.error("Error uploading image:", error);
      setError(t("editProduct.errorMessage"));
    } finally {
      setImageLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");
    try {
      await editProductAction(product);
      router.refresh();
      setInitialProduct(product);
      setSuccessMessage(t("editProduct.successMessage"));
    } catch (error) {
      console.error("Error updating product:", error);
      setError(t("editProduct.errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  const isChanged = () => {
    return (
      product.image !== initialProduct.image ||
      product.title !== initialProduct.title ||
      product.description !== initialProduct.description ||
      product.category !== initialProduct.category ||
      product.price !== initialProduct.price
    );
  };

  return (
    <section className="p-4 rounded-lg max-w-[1100px] mx-auto lg:mt-44 md:mt-32 mt-24 mb-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <ProductImage image={product.image} title={product.title} />
          <label className="block text-sm font-medium text-gray-color dark:text-white mb-2">
            {t("editProduct.uploadImage")}
          </label>
          <div className="relative">
            <input
              type="file"
              ref={inputFileRef}
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
              onChange={handleImage}
            />
            <button
              type="button"
              className="w-full dark:placeholder:text-white dark:bg-gray-color dark:text-white h-10 outline-none cursor-pointer font-bold text-btn-primary-color rounded-xl bg-light-bg-color"
              onClick={() => inputFileRef.current?.click()}
            >
              {imageLoading
                ? t("editProduct.uploading")
                : t("editProduct.choosePicture")}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-color dark:text-white mb-2">
            {t("editProduct.productTitle")}
          </label>
          <input
            type="text"
            className="w-full dark:placeholder:text-white dark:bg-gray-color dark:text-white h-10 outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
            {t("editProduct.description")}
          </label>
          <textarea
            className="w-full dark:placeholder:text-white dark:bg-gray-color dark:text-white h-24 outline-none pl-3 pt-2 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
            {t("editProduct.category")}
          </label>
          <select
            name="category"
            className="w-full dark:placeholder:text-white dark:bg-gray-color dark:text-white h-10 outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          >
            <option value="pottery" className="text-btn-primary-color">
              Pottery
            </option>
            <option value="resins" className="text-btn-primary-color">
              Resins
            </option>
            <option value="fiber" className="text-btn-primary-color">
              Fiber
            </option>
            <option value="catalysis" className="text-btn-primary-color">
              Catalysis
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
            {t("editProduct.price")}
          </label>
          <input
            type="number"
            className="w-full dark:placeholder:text-white dark:bg-gray-color dark:text-white h-10 outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
          />
        </div>

        <div className="flex justify-center items-center gap-10">
          <button
            type="submit"
            className="bg-black dark:bg-btn-primary-color text-center my-2 text-white py-2 hover:opacity-70 p-2 disabled:opacity-50"
            disabled={!isChanged() || loading}
          >
            {loading ? (
              <ImSpinner9 fontSize={20} className="animate-spin" />
            ) : (
              t("editProduct.saveChange")
            )}
          </button>
          <BackButton />
        </div>
        {successMessage && (
          <SuccessModalPages
            close={t("editProduct.close")}
            success={successMessage}
          />
        )}
        {error && (
          <p className="text-dark-cream-color text-sm font-bold mt-2">
            {error}
          </p>
        )}
      </form>
    </section>
  );
}

export default EditProductForm;
