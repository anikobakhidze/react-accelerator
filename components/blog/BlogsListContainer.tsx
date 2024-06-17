"use client";
import React from "react";
import BlogCard from "./BlogCard";
import { useState } from "react";
import Pagination from "../sharedComponents/UI/Pagination";
function BlogsListContainer({ blogs }: IBlogsContainer) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const totalPages = Math.ceil(blogs.length / productsPerPage);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = blogs.slice(startIndex, startIndex + productsPerPage);
  return (
    <div className="flex flex-col items-center w-full py-10">
      <div className="w-11/12 max-w-7xl mx-auto">
        <ul
          className="grid max-680:grid-cols-1 max-980:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-20 
         place-items-center"
        >
          {currentProducts.map((blog: IBlog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </ul>
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}

export default BlogsListContainer;
