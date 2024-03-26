import React from "react";

function UserProfileInfo() {
  return (
    <fieldset className="flex flex-col gap-4 w-2/6 h-80 ">
      <legend className="text-2xl font-bold text-teal-800 mb-4 w-full ">
        About
      </legend>
      <label htmlFor="name" className="text-xl font-semibold">
        Name
      </label>
      <input
        className="h-10 text-lg pl-2 rounded-xl outline-none "
        id="name"
        type="text"
        value="Name"
        placeholder="Name"
        readOnly
      />
      <label htmlFor="surname" className="text-xl font-semibold">
        Surname
      </label>
      <input
        className="h-10 text-lg pl-2 rounded-xl outline-none "
        id="surname"
        type="text"
        value="Surname"
        placeholder="Surname"
        readOnly
      />
      <label htmlFor="email" className="text-xl font-semibold">
        Email
      </label>
      <input
        className="h-10 text-lg pl-2 rounded-xl outline-none "
        id="email"
        type="Email"
        value="Email"
        readOnly
      />
    </fieldset>
  );
}

export default UserProfileInfo;
