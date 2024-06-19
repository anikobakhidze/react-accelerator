"use client";
import { useRouter } from "next/navigation";
import { CiCircleCheck } from "react-icons/ci";
import { useEffect } from "react";

function SuccessModalPages({
  success,
  close,
}: {
  success: string;
  close: string;
}) {
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {success && (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-white bg-opacity-90 dark:bg-black animate-fadeInUp ">
          <div className="text-green-color font-bold text-sm md:text-lg lg:text-xl mb-4 flex items-center">
            <CiCircleCheck className="mr-2 text-3xl" />
            {success}
          </div>
          <button
            onClick={() => router.back()}
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            {close}
          </button>
        </div>
      )}
    </>
  );
}

export default SuccessModalPages;
