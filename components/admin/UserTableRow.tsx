"use client";
import React, { useState } from "react";
import DeleteUserRow from "./DeleteUserRow";
import UpdateUserDetails from "./UpdateUserDetails";

function UserTableRow({ user }: { user: IUser }) {
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  const handleEditButton = () => {
    setIsEditVisible((prev) => !prev);
    setIsDeleteVisible(false);
  };

  const handleDeleteButton = () => {
    setIsDeleteVisible((prev) => !prev);
    setIsEditVisible(false);
  };

  return (
    <>
      <p className="w-28 text-center text-dark-green">{user.name}</p>
      <p className="w-56 text-center text-dark-green">{user.email}</p>
      <button
        className="w-28 text-center bg-black dark:bg-white dark:text-black hover:opacity-70 border-b-2 border-transparent text-white rounded transition duration-300 ease-in-out"
        onClick={handleEditButton}
      >
        Edit
      </button>

      <button
        className="w-28 text-center bg-btn-primary-color hover:opacity-70 border-2 border-transparent text-white rounded transition duration-300 ease-in-out"
        onClick={handleDeleteButton}
      >
        Delete
      </button>
      {isEditVisible && (
        <UpdateUserDetails
          setIsVisible={() => setIsEditVisible(false)}
          user={user}
        />
      )}
      {isDeleteVisible && (
        <DeleteUserRow
          setIsVisible={() => setIsDeleteVisible(false)}
          id={user.id}
        />
      )}
    </>
  );
}

export default UserTableRow;
