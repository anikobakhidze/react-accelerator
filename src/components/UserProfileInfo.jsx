import React from "react";

function UserProfileInfo({ label, userInfo }) {
  return (
    <>
      <h5 className="text-xl font-semibold">{label}</h5>
      <p className="h-10 text-lg  rounded-xl "> {userInfo}</p>
    </>
  );
}

export default UserProfileInfo;
