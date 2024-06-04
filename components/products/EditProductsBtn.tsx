"use client";
import { FiEdit } from "react-icons/fi";
import { hasUserRole } from "../../utils/userRole";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
function EditProductsBtn({ usersub }: { usersub: string }) {
  const { user } = useUser();
  const sub = user?.sub;
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      {(sub === usersub || (hasUserRole(user) && user.role[0] === "admin")) && (
        <button onClick={handleModal}>
          Edit
          <FiEdit />
        </button>
      )}
    </>
  );
}

export default EditProductsBtn;
