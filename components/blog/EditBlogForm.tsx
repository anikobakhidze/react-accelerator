"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { editBlogAction } from "@/actions";
import { useRouter } from "next/navigation";
function EditBlogForm({ blogDetails }: { blogDetails: IBlog }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blog, setBlog] = useState(blogDetails);
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
      setBlog((prev) => ({ ...prev, image: newBlob.url }));
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
      console.log(blog, "blog");
      await editBlogAction(blog);
      router.refresh();
      setSuccessMessage("Blog updated successfully");
    } catch (error) {
      console.error("Error updating blog:", error);
      setError("Error updating blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        {blog.image && (
          <div className="mb-4">
            <Image src={blog.image} alt="Uploaded" width={60} height={60} />
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
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            value={blog.category}
            onChange={(e) => setBlog({ ...blog, category: e.target.value })}
          >
            <option value="ceramic">Ceramic</option>
            <option value="flower">Flower-pot</option>
            <option value="mug">Mug</option>
            <option value="pottery">Pottery</option>
          </select>
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

export default EditBlogForm;
