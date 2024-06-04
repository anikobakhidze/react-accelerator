"use client";

import { uploadProductAction } from "@/actions";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useRef, useState } from "react";

const AddProductsForm = ({ closeModal }: { closeModal: () => void }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("pottery");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productLoading, setProductLoading] = useState(false);
  const [productError, setProductError] = useState("");
  const { user } = useUser();
  const userSub = user?.sub;
  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      setError("No file selected");
      return;
    }
    const file = e.target.files[0];
    console.log(file);
    setLoading(true);
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
  const product: Product = {
    image,
    title,
    description,
    category,
    price,
    quantity,
    userSub,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProductLoading(true);
    try {
      await uploadProductAction(product);
      closeModal();
    } catch (error) {
      console.error("Error uploading product:", error);
      setProductError("Error uploading product");
    } finally {
      setProductLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {image && (
              <Image
                src={image}
                alt="Uploaded"
                className="rounded-full"
                width={30}
                height={30}
              />
            )}
            <label className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              ref={inputFileRef}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              onChange={handleImage}
            />
            {loading && <p>Uploading...</p>}
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Title
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="pottery">Pottery</option>
              <option value="resins">Resins</option>
              <option value="fiber">Fiber</option>
              <option value="catalysis">Catalysis</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            {productLoading ? "Uploading" : "Add Product"}
          </button>
          {productError && <p>{productError}</p>}
        </form>
        <button onClick={closeModal} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default AddProductsForm;
