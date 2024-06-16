"use client";
import { deleteCartAction } from "@/actions";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

function ResetCart({ heading, userId }: { heading: string; userId: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setError("");
    try {
      await deleteCartAction(userId);
    } catch (error) {
      setError("Failed to delete cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-60">
          <ClipLoader size={100} color="#e4986a" />
        </div>
      )}
      <button
        onClick={handleClick}
        className="relative bg-black dark:bg-white dark:text-black py-2 px-6 ml-6 text-white overflow-hidden group"
        disabled={loading}
      >
        <span className="relative z-10 w-full h-full">{heading}</span>
        <span className="absolute left-0 bottom-0 w-full h-full bg-btn-primary-color transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
      </button>
      {error && (
        <div className="mt-4 text-btn-primary-color text-center">{error}</div>
      )}
    </div>
  );
}

export default ResetCart;
