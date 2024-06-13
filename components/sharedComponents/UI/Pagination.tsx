import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-2 bg-black hover:opacity-75 text-white dark:bg-white dark:text-black disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-3 ">
        <span className="text-btn-primary-color font-bold">{currentPage}</span>{" "}
        of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-2 w-24 bg-black hover:opacity-75 text-white dark:bg-white dark:text-black disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
