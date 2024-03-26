import React from "react"; // Import React if not already imported
import blogsData from "../constants/blogsData";
import BlogCard from "./BlogCard";

function BlogsListContainer() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center my-10">
        iPhone Insights: Stay Updated with the Latest Blogs
      </h2>
      <ul className="w-4/5 grid grid-cols-3  gap-6 mx-auto my-10">
        {blogsData.map((blog) => {
          return (
            <li key={blog.id} className="">
              <BlogCard blog={blog} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default BlogsListContainer;
