"use client";
import { deleteBlogAction } from "@/actions";
import { useI18n } from "@/locales/client";
function DeleteBlog({ setDeleteModal, id }: IDeleteProduct) {
  const handleCancel = () => {
    setDeleteModal(false);
  };
  const handleDeleteBlog = async () => {
    await deleteBlogAction(id);
    handleCancel();
  };
  const t = useI18n();
  return (
    <section className="absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75">
      <div className="w-4/5 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="dark:text-white ">{t("blogsPage.delete")}</h3>
        <div className="mt-4">
          <button
            className="mr-4 px-4 py-2 bg-btn-primary-color text-white rounded hover:opacity-70"
            onClick={handleDeleteBlog}
          >
            {t("yes")}
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={handleCancel}
          >
            {t("no")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default DeleteBlog;
