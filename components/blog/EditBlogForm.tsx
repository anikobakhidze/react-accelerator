"use client";

import React, { useState, useRef } from "react";

import { editBlogAction } from "@/actions";
import { useRouter } from "next/navigation";
import { useI18n } from "@/locales/client";
import BlogImage from "./BlogImage";
import BackButton from "../sharedComponents/UI/BackBtn";
import { ImSpinner9 } from "react-icons/im";
import SuccessModalPages from "../sharedComponents/UI/SuccessModalPages";
function EditBlogForm({ blogDetails }: { blogDetails: IBlog }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blog, setBlog] = useState(blogDetails);
  const [initialBlog, setInitialBlog] = useState(blogDetails);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const t = useI18n();
  const router = useRouter();
  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];

    setImageLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      if (!response.ok) {
        throw new Error(t("editBlog.failMessage"));
      }

      const newBlob = await response.json();
      setBlog((prev) => ({ ...prev, image: newBlob.url }));
    } catch (error) {
      console.error("Error uploading image:", error);
      setError(t("editBlog.errorMessage"));
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
      await editBlogAction(blog);
      router.refresh();
      setInitialBlog(blog);
      setSuccessMessage(t("editBlog.successMessage"));
    } catch (error) {
      console.error("Error updating blog:", error);
      setError(t("editBlog.errorMessage"));
    } finally {
      setLoading(false);
    }
  };
  const isChanged = () => {
    return (
      blog.image !== initialBlog.image ||
      blog.title !== initialBlog.title ||
      blog.description !== initialBlog.description ||
      blog.category !== initialBlog.category
    );
  };

  return (
    <section className="p-4 rounded-lg max-w-[1100px] mx-auto lg:mt-44 md:mt-32 mt-24 mb-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <BlogImage image={blog.image} title={blog.title} />

          <label className="block text-sm font-medium text-gray-color dark:text-white mb-2">
            {t("editBlog.uploadImage")}
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
                ? t("editBlog.uploading")
                : t("editBlog.choosePicture")}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-color dark:text-white mb-2">
            {t("editBlog.blogTitle")}
          </label>
          <input
            type="text"
            className="w-full dark:placeholder:text-white dark:bg-gray-color dark:text-white h-10 outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
            {t("editBlog.description")}
          </label>
          <textarea
            className="w-full dark:placeholder:text-white dark:bg-gray-color dark:text-white h-24 outline-none pl-3 pt-2 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
            {t("editBlog.category")}
          </label>
          <select
            name="category"
            className="w-full dark:placeholder:text-white dark:bg-gray-color dark:text-white h-10 outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
            value={blog.category}
            onChange={(e) => setBlog({ ...blog, category: e.target.value })}
          >
            <option value="ceramic">Ceramic</option>
            <option value="flower">Flower-pot</option>
            <option value="mug">Mug</option>
            <option value="pottery">Pottery</option>
          </select>
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
            close={t("editBlog.close")}
            success={successMessage}
            href="/blogs"
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

export default EditBlogForm;
