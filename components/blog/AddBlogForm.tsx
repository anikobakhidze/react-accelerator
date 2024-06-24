"use client";

import { createBlogAction } from "@/actions";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import SuccessMessage from "../sharedComponents/UI/SuccessMessage";

const AddBlogForm = ({ closeModal }: { closeModal: () => void }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("ceramic");
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogError, setBlogError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const { user } = useUser();
  const userSub = user?.sub;
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
    setBlogLoading(true);
    setBlogError("");
    setTitleError("");
    setDescriptionError("");

    if (!title && !description) {
      setBlogError("Title and description are required");
      setBlogLoading(false);
      return;
    } else if (!description) {
      setDescriptionError("Blog description is required");
      setBlogLoading(false);
      return;
    } else if (!title) {
      setTitleError("Blog title is required");
      setBlogLoading(false);
      return;
    }

    const blog: IBlogCreate = {
      image,
      title,
      description,
      category,
      userSub,
    };

    try {
      await createBlogAction(blog);
      setSuccess("Blog post uploaded successfully!");
      router.refresh();
      setTitle("");
      setDescription("");
      setImage("");
    } catch (error) {
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

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (titleError) {
      setTitleError("");
    }
    if (blogError) {
      setBlogError("");
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    if (descriptionError) {
      setDescriptionError("");
    }
    if (blogError) {
      setBlogError("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white dark:bg-gray-800 p-8 rounded shadow-lg w-full max-w-md max-h-full overflow-auto"
        ref={modalRef}
      >
        <h2 className="text-lg font-bold text-btn-primary-color lg:text-2xl mb-4">
          Add New Blog Post
        </h2>
        <SuccessMessage success={success} closeModal={closeModal} />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {image && (
              <Image
                src={image}
                alt="Uploaded"
                className="rounded-full"
                width={150}
                height={150}
              />
            )}
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
              Blog Title
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
              <option value="ceramic" className="text-btn-primary-color">
                Ceramic
              </option>
              <option value="flower" className="text-btn-primary-color">
                Flower-pot
              </option>
              <option value="mug" className="text-btn-primary-color">
                Mug
              </option>
              <option value="pottery" className="text-btn-primary-color">
                Pottery
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-btn-primary-color text-center text-white py-2 hover:opacity-70 rounded-xl"
          >
            {blogLoading ? (
              <div className="flex justify-center items-center w-full">
                <ImSpinner9 fontSize={20} className="animate-spin" />
              </div>
            ) : (
              "Add Blog Post"
            )}
          </button>
          {blogError && (
            <p className="text-dark-cream-color font-bold text-sm md:text-lg mt-2">
              {blogError}
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

export default AddBlogForm;
