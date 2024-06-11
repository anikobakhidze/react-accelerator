"use client";

import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import AddProducts from "./AddProductsForm";
import { useI18n } from "@/locales/client";

const AddProductsBtn = () => {
  const [modal, setModal] = useState(false);
  const t = useI18n();

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleModal}
        className="flex items-center p-2 bg-btn-primary-color hover:opacity-75 text-white "
      >
        <MdAddCircleOutline size={20} />
        <span className="ml-2">{t("product.addProduct")}</span>
      </button>
      {modal && <AddProducts closeModal={handleModal} />}
    </>
  );
};

export default AddProductsBtn;
