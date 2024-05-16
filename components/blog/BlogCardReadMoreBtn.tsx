"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useI18n } from "../../locales/client";
function BlogCardReadMoreBtn({ id }: Id): JSX.Element {
  const routes = useRouter();
  const handleClick = () => {
    routes.push(`/blogs/${id}`);
  };
  const t = useI18n();
  return (
    <button className="text-teal-700 hover:text-teal-500" onClick={handleClick}>
      {t("blogsPage.readMore")}
    </button>
  );
}

export default BlogCardReadMoreBtn;
