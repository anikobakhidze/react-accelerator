"use client";

import { createProductAction } from "@/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import SuccessMessage from "../sharedComponents/UI/SuccessMessage";

const AddProductsForm = ({ closeModal }: { closeModal: () => void }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("mugs");
  const [price, setPrice] = useState("");
  const [productLoading, setProductLoading] = useState(false);
  const [productError, setProductError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      setError("No file selected");
      return;
    }
    const file = e.target.files[0];

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const newBlob = await response.json();
      setImage(newBlob.url);
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProductLoading(true);
    setProductError("");
    setTitleError("");
    setDescriptionError("");
    setPriceError("");

    if (!title && !description && !price) {
      setProductError("Title, description, and price are required");
      setProductLoading(false);
      return;
    } else if (!description) {
      setDescriptionError("Product description is required");
      setProductLoading(false);
      return;
    } else if (!title) {
      setTitleError("Product title is required");
      setProductLoading(false);
      return;
    } else if (!price) {
      setPriceError("Product price is required");
      setProductLoading(false);
      return;
    }

    const product: Product = {
      image,
      title,
      description,
      category,
      price,
    };

    try {
      await createProductAction(product);
      setSuccess("Product uploaded successfully!");
      router.refresh();
      setTitle("");
      setDescription("");
      setPrice("");
      setImage("");
    } catch (error) {
      setProductError("Error uploading product");
    } finally {
      setProductLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (titleError) {
      setTitleError("");
    }
    if (productError) {
      setProductError("");
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    if (descriptionError) {
      setDescriptionError("");
    }
    if (productError) {
      setProductError("");
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
    if (priceError) {
      setPriceError("");
    }
    if (productError) {
      setProductError("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div
        className="bg-white dark:bg-gray-800 p-8 rounded shadow-lg w-full max-w-md max-h-full overflow-auto"
        ref={modalRef}
      >
        <h2 className="text-lg font-bold text-btn-primary-color lg:text-2xl mb-4">
          Add New Product
        </h2>
        <SuccessMessage success={success} closeModal={closeModal} />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex justify-center items-center">
              {image && (
                <Image src={image} alt="Uploaded" width={150} height={150} />
              )}
            </div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
              Upload Image
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
                className="w-full dark:placeholder:text-white dark:bg-gray-700 dark:text-white h-10 outline-none cursor-pointer font-bold text-btn-primary-color rounded-xl bg-light-bg-color"
                onClick={() => inputFileRef.current?.click()}
              >
                {loading ? "Uploading..." : "Choose Picture"}
              </button>
            </div>
            {error && (
              <p className="text-dark-cream-color font-bold text-sm">{error}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
              Product Title
            </label>
            <input
              type="text"
              className="w-full dark:placeholder:text-white dark:bg-gray-700 dark:text-white h-10 outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
              onChange={handleTitleChange}
              value={title}
              placeholder="Title"
            />
            {titleError && (
              <p className="text-sm text-dark-cream-color font-bold">
                {titleError}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
              Description
            </label>
            <textarea
              className="w-full dark:placeholder:text-white dark:bg-gray-700 dark:text-white h-24 outline-none pl-3 pt-2 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
              onChange={handleDescriptionChange}
              value={description}
              placeholder="Description"
            ></textarea>
            {descriptionError && (
              <p className="text-sm text-dark-cream-color font-bold">
                {descriptionError}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
              Category
            </label>
            <select
              name="category"
              className="w-full dark:placeholder:text-white dark:bg-gray-700 dark:text-white h-10 outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="mugs" className="text-btn-primary-color">
                Mugs
              </option>
              <option value="decorations" className="text-btn-primary-color">
                Decorations
              </option>
              <option value="plates" className="text-btn-primary-color">
                Plates & Bowls
              </option>
              <option value="other" className="text-btn-primary-color">
                other
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
              Price
            </label>
            <input
              type="number"
              className="w-full dark:placeholder:text-white dark:bg-gray-700 dark:text-white h-10 outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
              onChange={handlePriceChange}
              value={price}
              placeholder="Price"
            />
            {priceError && (
              <p className="text-sm text-dark-cream-color font-bold">
                {priceError}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-btn-primary-color text-center text-white py-2 hover:opacity-70 rounded-xl"
          >
            {productLoading ? (
              <div className="w-full flex justify-center items-center">
                <ImSpinner9 fontSize={20} className="animate-spin" />
              </div>
            ) : (
              "Add Product"
            )}
          </button>
          {productError && (
            <p className="text-dark-cream-color font-bold text-sm md:text-lg mt-2">
              {productError}
            </p>
          )}
        </form>
        <button
          onClick={closeModal}
          className="mt-4 text-base bg-black dark:text-black dark:bg-white p-2 text-white hover:opacity-70 w-full rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddProductsForm;
