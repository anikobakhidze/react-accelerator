"use client";
import AddUserForm from "./AddUserForm";
import { useState } from "react";
import { TiUserAdd } from "react-icons/ti";
function AddUserToggle() {
  const [isVisible, setIsVisible] = useState(false);
  const handleAddUserBtn = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <button
        onClick={handleAddUserBtn}
        className="w-10 h-10 rounded-full bg-medium-green flex justify-center items-center hover:bg-dark-green transition-all duration-300"
      >
        <TiUserAdd className="w-8 h-8 text-white" />
      </button>
      {isVisible && (
        <AddUserForm isVisible={isVisible} setIsVisible={setIsVisible} />
      )}
    </>
  );
}

export default AddUserToggle;
