"use server";
import logo from "../../public/images/logo.svg";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfilePageButton from "../profile/ProfilePageButton";
import HeaderNavigationList from "./HeaderNavigationList";
import Link from "next/link";
import Image from "next/image";
import LogOutBtn from "../sharedComponents/UI/LogOutBtn";
import ThemeSwitch from "../sharedComponents/UI/ThemeSwitch";
import LanguageSwitcher from "../sharedComponents/Language/LanguageSwitcher";

async function Header() {
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
        <ThemeSwitch />
        <button className="hidden md:hidden">
          <GiHamburgerMenu />
        </button>
      </div>
      <LanguageSwitcher />
      <LogOutBtn />
    </header>
  );
}

export default Header;
