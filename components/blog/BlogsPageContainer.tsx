"use client";
import { useState } from "react";
import Heading from "../sharedComponents/UI/Heading";
import BlogListContainer from "./BlogsListContainer";
import SearchBar from "@/components/sharedComponents/UI/SearchBar";
import { useI18n } from "@/locales/client";

function BlogsPageContainer({ blogs }: IBlogsContainer) {
  const [sortProducts, setSortProducts] = useState(blogs);
  const t = useI18n();
  return (
    <section className="mt-28 mb-10 lg:mt-40 lg:mb-14">
      <Heading heading={t("blogsPage.blog")} />
      <SearchBar products={blogs} setSortProducts={setSortProducts} />
      <BlogListContainer blogs={sortProducts} />
    </section>
  );
}

export default BlogsPageContainer;
