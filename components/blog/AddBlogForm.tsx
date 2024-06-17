"use client";

import { createBlogAction } from "@/actions";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
const AddBlogForm = ({ closeModal }: { closeModal: () => void }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("ceramic");
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogError, setBlogError] = useState("");
  const { user } = useUser();
  const userSub = user?.sub;
  const modalRef = useRef<HTMLDivElement>(null);
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
    setBlogLoading(true);

    const blog: IBlogCreate = {
      image,
      title,
      description,
      category,
      userSub,
    };

    try {
      await createBlogAction(blog);
      closeModal();
    } catch (error) {
      console.error("Error uploading blog post:", error);
      setBlogError("Error uploading blog post");
    } finally {
      setBlogLoading(false);
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white p-8 rounded shadow-lg w-full max-w-md"
        ref={modalRef}
      >
        <h2 className="text-2xl mb-4">Add New Blog Post</h2>
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
              Blog Title
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
              <option value="ceramic">Ceramic</option>
              <option value="flower">Flower-pot</option>
              <option value="mug">Mug</option>
              <option value="pottery">Pottery</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-btn-primary-color text-white py-2  hover:opacity-70"
          >
            {blogLoading ? (
              <ImSpinner9 fontSize={20} className="animate-spin" />
            ) : (
              "Add Blog Post"
            )}
          </button>
          {blogError && (
            <p className="text-dark-cream-color font-bold text-sm mt-2">
              {blogError}
            </p>
          )}
        </form>
        <button
          onClick={closeModal}
          className="mt-4 text-base bg-black dark:bg-white p-2 text-white hover:opacity-70 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddBlogForm;
