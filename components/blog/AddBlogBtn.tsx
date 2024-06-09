import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import AddBlogForm from "./AddBlogForm";

const AddBlogBtn = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleModal}
        className="flex items-center p-2 bg-blue-500 text-white rounded-md"
      >
        <MdAddCircleOutline size={24} /> <span className="ml-2">Add Blog</span>
      </button>
      {modal && <AddBlogForm closeModal={handleModal} />}
    </>
  );
};

export default AddBlogBtn;
