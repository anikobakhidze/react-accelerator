"use client";
import { editUserAction } from "@/actions";
import React, { useState } from "react";

function UpdateUserDetails({ user, setIsVisible }: IEditUserDetails) {
  const handleClose = () => {
    setIsVisible();
  };

  const [updateUser, setUpdateUser] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
    age: user.age,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    try {
      await editUserAction(formData);
      setIsVisible();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="fixed inset-0 bg-light-green flex items-center justify-center px-4 py-6 z-10 bg-opacity-75">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full mx-auto border border-medium-green"
      >
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleClose}
            className="text-dark-green hover:text-medium-green text-3xl w-10 "
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="space-y-6">
          <input type="hidden" name="id" value={updateUser.id} />
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-dark-green"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={updateUser.name}
              onChange={(e) =>
                setUpdateUser({ ...updateUser, name: e.target.value })
              }
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medium-green focus:border-medium-green"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-dark-green"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={updateUser.email}
              onChange={(e) =>
                setUpdateUser({ ...updateUser, email: e.target.value })
              }
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medium-green focus:border-medium-green"
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-dark-green"
            >
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              value={updateUser.age.toString()}
              onChange={(e) =>
                setUpdateUser({ ...updateUser, age: parseInt(e.target.value) })
              }
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medium-green focus:border-medium-green"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-medium-green hover:bg-dark-green text-white font-bold rounded-md transition duration-300 ease-in-out"
          >
            Update
          </button>
        </div>
      </form>
    </section>
  );
}

export default UpdateUserDetails;
