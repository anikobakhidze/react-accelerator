"use client";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

function BlogsListContainer({ blogs }) {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   async function getBlog() {
  //     const resp = await fetch("https://dummyjson.com/posts");
  //     const blogs = await resp.json();
  //     setBlogs(blogs.posts);
  //   }
  //   getBlog();
  // });
  return (
    <section className="overflow-auto">
      <h2 className="text-2xl font-bold text-center my-10">
        Stay Updated with the Latest Blogs
      </h2>
      <ul className="w-4/5 grid grid-cols-1 md:w-[90%] md:gap-10 md:grid-cols-2 xl:grid-cols-3 gap-14 mx-auto my-10">
        {blogs.map((blog) => {
          return (
            <li
              key={blog.id}
              className="rounded-xl  shadow-teal-800 shadow-2xl"
            >
              <BlogCard blog={blog} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default BlogsListContainer;
