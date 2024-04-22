"use server";
import logo from "../public/logo.svg";
import { AiOutlineUser } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfilePageButton from "./ProfilePageButton";
import HeaderNavigationList from "./HeaderNavigationList";
import Link from "next/link";
import Image from "next/image";
import { logout } from "@/app/[locale]/actions";
import LogOutBtn from "./LogOutBtn";
import ThemeSwitch from "./ThemeSwitch";
import LanguageChanger from "./LanguageChanger";

async function Header() {
  const handleLogOut = async () => {
    "use server";
    await logout();
  };

  return (
    <header className="flex justify-around items-center h-20 pt-6 ">
      <Link href="/">
        <Image src={logo} alt="logo" width={68} height={38} />
      </Link>
      <HeaderNavigationList />
      <div className="w-28 flex justify-between items-center">
        <ProfilePageButton />
        <button className="rounded-[50%] w-7 h-7 flex justify-center items-center bg-gray-300 transition-all hover:bg-gray-400 hover:scale-105  dark:bg-white ">
          <FaCartShopping className="dark:text-black" />
        </button>
        {/* <button>
          <FiSun className="text-[#4abca9]" />
        </button> */}
        <ThemeSwitch />
        <button className="hidden md:hidden">
          <GiHamburgerMenu />
        </button>
      </div>
      <LanguageChanger />
      <LogOutBtn handleLogOut={handleLogOut} />
    </header>
  );
}

export default Header;
