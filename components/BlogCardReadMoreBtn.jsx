"use client";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

function BlogCardReadMoreBtn({ id }) {
  const routes = useRouter();
  const handleClick = () => {
    routes.push(`/blogs/${id}`);
  };
  const { t } = useTranslation();
  return (
    <button className="text-teal-700 hover:text-teal-500" onClick={handleClick}>
      {t("blogsPage.readMore")}
    </button>
  );
}

export default BlogCardReadMoreBtn;
