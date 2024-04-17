"use client";
import React from "react";
import { useRouter } from "next/navigation";
function Button({
  children,
  classname = "rounded-[50%] w-7 h-7 flex justify-center items-center bg-gray-300 transition-all hover:bg-gray-400 hover:scale-105  ",
  onClick,
}) {
  const router = useRouter();

  const navigateToProfile = () => {
    router.push("/profile");
  };

  return (
    <button className={classname} onClick={navigateToProfile}>
      {children}
    </button>
  );
}

export default Button;
