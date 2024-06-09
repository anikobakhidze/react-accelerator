"use client";
// import defaultBlogImage from "../../public/images/defaultBlogImage.webp";
// import Image from "next/image";
import BlogsCardReadMoreBtn from "./BlogCardReadMoreBtn";
import Link from "next/link";
import React, { useState } from "react";
import { hasUserRole } from "@/utils/userRole";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import DeleteBlog from "./DeleteBlog";
import { useUser } from "@auth0/nextjs-auth0/client";
import BlogImage from "./BlogImage";

const BlogCard: React.FC<IBlogPost> = ({
  blog: { id, image, title, description, userSub, created_at },
}) => {
  const { user } = useUser();
  const sub = user?.sub;
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <BlogImage image={image} title={title} />
      <div className="p-6 min-h-64 flex flex-col justify-between">
        <h2 className="font-bold mb-3 text-xl">{title}</h2>
        <p className="text-gray-800 max-h-28 overflow-hidden dark:text-white">
          {description}
        </p>
        <div className="flex justify-between mt-6">
          <span className="text-gray-400">{created_at}</span>
          <BlogsCardReadMoreBtn id={id} />
        </div>
        {(sub === userSub ||
          (hasUserRole(user) && user?.role[0] === "admin")) && (
          <Link href={`/editblog/${id}`} className="flex items-center mt-2">
            Edit <FiEdit className="ml-2" />
          </Link>
        )}
        {(sub === userSub ||
          (hasUserRole(user) && user?.role[0] === "admin")) && (
          <RiDeleteBin5Line onClick={() => setDeleteModal(true)} />
        )}
        {deleteModal && <DeleteBlog setDeleteModal={setDeleteModal} id={id} />}
      </div>
    </>
  );
};

export default BlogCard;
