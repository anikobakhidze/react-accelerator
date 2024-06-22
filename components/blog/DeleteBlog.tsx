import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { deleteBlogAction } from "@/actions";
import { useI18n } from "@/locales/client";

function DeleteBlog({ setDeleteModal, id }: IDeleteProduct) {
  const [loading, setLoading] = useState(false);
  const t = useI18n();

  const handleCancel = () => {
    setDeleteModal(false);
  };

  const handleDeleteBlog = async () => {
    setLoading(true);
    try {
      await deleteBlogAction(id);
      handleCancel();
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75">
      <div className="w-4/5 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="dark:text-white ">{t("blogsPage.delete")}</h3>
        <div className="mt-4 flex ">
          <button
            className="mr-4 px-4 py-2 bg-btn-primary-color text-white rounded hover:opacity-70 flex items-center justify-center"
            onClick={handleDeleteBlog}
            disabled={loading}
          >
            {loading ? <ClipLoader color="#ffffff" size={20} /> : t("yes")}
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={handleCancel}
            disabled={loading}
          >
            {t("no")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default DeleteBlog;
