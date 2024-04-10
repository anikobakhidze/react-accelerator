"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import defaultBlogImage from "../../../public/defaultBlogImage.webp";
export default function BlogsDetailPage({ params: { blogsId } }) {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    async function getBlog() {
      const resp = await fetch(`https://dummyjson.com/posts/${blogsId}`);
      const blog = await resp.json();
      setBlog(blog);
    }
    getBlog();
  });
  return (
    <section className="flex flex-1 flex-col  justify-center bg-light-green w-full py-10">
      <h2 className="text-dark-green w-4/5 mx-auto text-3xl font-bold mb-10 first-letter:capitalize my-10">
        Blog {blog.id}
      </h2>
      <div className="flex flex-col gap-10 w-4/5  mx-auto">
        <div>
          <Image
            src={defaultBlogImage}
            alt={blog.title}
            width={500}
            height={500}
          />
        </div>

        <h3 className="font-bold text-xl mr-10 text-dark-green ">
          {blog.title}
        </h3>
        <p className="font-semibold text-md">{blog.body}</p>
      </div>
    </section>
  );
}
