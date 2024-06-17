"use client";
import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import AddBlogForm from "./AddBlogForm";
import { useI18n } from "@/locales/client";
const AddBlogBtn = () => {
  const [modal, setModal] = useState(false);
  const t = useI18n();
  const handleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleModal}
        className=" flex items-center dark:bg-light-bg-color justify-center text-sm rounded-full w-6 h-6 md:w-8 md:h-8  xl:w-fit xl:h-fit xl:rounded-none xl:text-base xl:p-2 bg-black hover:opacity-75 xl:text-white"
      >
        <MdAddCircleOutline size={20} className=" text-white dark:text-black" />
        <span className="ml-2 hidden xl:flex dark:text-black">
          {t("blogsPage.blog")}
        </span>
      </button>
      {modal && <AddBlogForm closeModal={handleModal} />}
    </>
  );
};

export default AddBlogBtn;
