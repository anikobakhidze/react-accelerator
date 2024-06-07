"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { updateProductAction } from "@/actions";
import { useRouter } from "next/navigation";
function EditProductForm({
  productDetails,
}: {
  productDetails: IProductDetails;
}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [product, setProduct] = useState(productDetails);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];

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
      setProduct((prev) => ({ ...prev, image: newBlob.url }));
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");
    try {
      await updateProductAction(product);
      router.refresh();
      setSuccessMessage("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Error updating product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        {product.image && (
          <div className="mb-4">
            <Image src={product.image} alt="Uploaded" width={60} height={60} />
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
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Title
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
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
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            value={product.quantity}
            onChange={(e) =>
              setProduct({ ...product, quantity: Number(e.target.value) })
            }
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Save Changes
        </button>
        {successMessage && (
          <p className="text-green-500 text-sm mt-2">{successMessage}</p>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </main>
  );
}

export default EditProductForm;
