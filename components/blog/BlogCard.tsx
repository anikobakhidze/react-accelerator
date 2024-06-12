"use client";

import Link from "next/link";
import React, { useState } from "react";
import { hasUserRole } from "@/utils/userRole";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import DeleteBlog from "./DeleteBlog";
import { useUser } from "@auth0/nextjs-auth0/client";
import BlogImage from "./BlogImage";
import { useRouter } from "next/navigation";
import { useI18n } from "../../locales/client";
import Loader from "../sharedComponents/UI/Loader";

const BlogCard: React.FC<IBlogPost> = ({
  blog: { id, image, title, description, userSub },
}) => {
  const { user } = useUser();
  const sub = user?.sub;
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const routes = useRouter();
  const handleClick = () => {
    setLoading(true);
    routes.push(`/blogs/${id}`);
  };
  const t = useI18n();

  return (
    <div className="max-w-[300px] h-[500px] flex flex-col shadow-lg relative ">
      {loading && <Loader />}
      <div className="relative">
        <BlogImage image={image} title={title} />
        <div className="absolute inset-0 bg-black bg-opacity-50 dark:block hidden"></div>
      </div>
      <div className="p-4 -h-2/3 flex flex-col justify-between">
        <h2 className="font-bold mb-2 text-lg text-black dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 overflow-hidden italic font-semibold flex-grow">
          {description}
        </p>
        <div className="flex justify-between mt-4">
          <div className="flex my-2">
            {(sub === userSub ||
              (hasUserRole(user) && user?.role[0] === "admin")) && (
              <Link href={`/editblog/${id}`} className="flex items-center">
                <FiEdit className="mr-4 text-lg hover:text-btn-primary-color ursor-pointer transition-colors duration-300" />
              </Link>
            )}
            {(sub === userSub ||
              (hasUserRole(user) && user?.role[0] === "admin")) && (
              <RiDeleteBin5Line
                className="text-lg  hover:text-btn-primary-color cursor-pointer transition-colors duration-300"
                onClick={() => setDeleteModal(true)}
              />
            )}
          </div>
          <button
            className="text-btn-primary-color font-semibold hover:opacity-75 transition-opacity duration-300"
            onClick={handleClick}
          >
            {t("blogsPage.readMore")}
          </button>
        </div>
        {deleteModal && <DeleteBlog setDeleteModal={setDeleteModal} id={id} />}
      </div>
    </div>
  );
};

export default BlogCard;
