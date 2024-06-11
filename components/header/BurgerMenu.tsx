"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerMenuModal from "./BurgerMenuModal";

function BurgerMenu({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="lg:hidden relative flex justify-center items-center bg-btn-primary-color p-2 rounded-full w-6 h-6 md:w-8 md:h-8 hover:opacity-75"
      >
        <GiHamburgerMenu className="text-white w-4 h-4 md:w-8 md:h-8 " />
      </button>
      <BurgerMenuModal isOpen={isOpen} onClose={handleClose} user={user} />
    </>
  );
}

export default BurgerMenu;
