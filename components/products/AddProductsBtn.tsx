"use client";

import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import AddProducts from "./AddProductsForm";
import { useI18n } from "@/locales/client";
import { useRouter } from "next/navigation";

const AddProductsBtn = () => {
  const [modal, setModal] = useState(false);
  const t = useI18n();
  const router = useRouter();
  const handleModal = () => {
    setModal((prev) => !prev);
    router.push("/myproducts");
  };

  return (
    <>
      <button
        onClick={handleModal}
        className="flex items-center justify-center text-sm rounded-full  w-6 h-6 md:w-8 md:h-8  xl:w-fit xl:h-fit  xl:rounded-none xl:text-base xl:p-2 bg-btn-primary-color hover:opacity-75 xl:text-white"
      >
        <MdAddCircleOutline size={20} className="text-white" />
        <span className="ml-2 hidden xl:flex">{t("product.addProduct")}</span>
      </button>
      {modal && <AddProducts closeModal={handleModal} />}
    </>
  );
};

export default AddProductsBtn;
