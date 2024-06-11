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
        className="flex items-center p-2 bg-light-green-color text-white hover:opacity-75 w-32"
      >
        <MdAddCircleOutline size={24} />{" "}
        <span className="ml-2">{t("blogsPage.blog")}</span>
      </button>
      {modal && <AddBlogForm closeModal={handleModal} />}
    </>
  );
};

export default AddBlogBtn;
