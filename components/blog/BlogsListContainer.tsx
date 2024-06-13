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
    <>
      <ul className="flex flex-wrap justify-center mt-20 max-w-7xl mx-auto gap-6">
        {currentProducts.map((blog: IBlog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </ul>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}

export default BlogsListContainer;
