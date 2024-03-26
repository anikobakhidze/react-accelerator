import React from "react";

function Button({
  children,
  classname = "rounded-[50%] w-7 h-7 flex justify-center items-center bg-gray-300 transition-all hover:bg-gray-400 hover:scale-105",
  onClick,
}) {
  return (
    <button className={classname} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
