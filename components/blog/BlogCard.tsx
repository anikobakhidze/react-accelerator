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
import { ClipLoader } from "react-spinners";

const BlogCard: React.FC<IBlogPost> = ({
  blog: { id, image, title, userSub },
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
  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-60">
        <ClipLoader size={100} color="#e4986a" />
      </div>
    );
  }
  return (
    <div className="max-w-[300px] h-[500px] flex flex-col shadow-lg relative ">
      <div className="relative">
        <BlogImage image={image} title={title} />
        <div className="absolute inset-0 bg-black bg-opacity-50 dark:block hidden"></div>
      </div>
      <div className="p-4 -h-2/3 flex flex-col justify-between">
        <h2 className="font-bold  text-lg text-black dark:text-white h-16">
          {title}
        </h2>
        <div className="flex justify-between mt-4">
          <div className="flex my-2">
            {user &&
              (sub === userSub ||
                (hasUserRole(user) && user?.role[0] === "admin")) && (
                <>
                  <Link href={`/editblog/${id}`} className="flex items-center">
                    <FiEdit className="mr-4 text-lg hover:text-btn-primary-color ursor-pointer transition-colors duration-300" />
                  </Link>
                  <RiDeleteBin5Line
                    className="text-lg  hover:text-btn-primary-color cursor-pointer transition-colors duration-300"
                    onClick={() => setDeleteModal(true)}
                  />
                </>
              )}
          </div>
          <button
            className="text-btn-primary-color hover:scale-105 font-semibold hover:opacity-75 transition-all duration-300"
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
