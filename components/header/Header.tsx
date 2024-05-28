"use server";
import logo from "../../public/images/logo.svg";
import { getSession } from "@auth0/nextjs-auth0";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfilePageButton from "../profile/ProfilePageButton";
import HeaderNavigationList from "./HeaderNavigationList";
import Link from "next/link";
import Image from "next/image";
import LogOutBtn from "../sharedComponents/UI/LogOutBtn";
import ThemeSwitch from "../sharedComponents/UI/ThemeSwitch";
import LanguageSwitcher from "../sharedComponents/Language/LanguageSwitcher";
import AddToCartBtn from "../cart/AddToCartBtn";

async function Header() {
  return (
    <header className="flex justify-around items-center h-20 pt-6 ">
      <Link href="/">
        <Image src={logo} alt="logo" width={68} height={38} />
      </Link>
      <HeaderNavigationList />
      <div className="w-28 flex justify-between items-center">
        <ProfilePageButton />

        <ThemeSwitch />
        <AddToCartBtn />
        <button className="hidden md:hidden">
          <GiHamburgerMenu />
        </button>
      </div>
      <LanguageSwitcher />
      {/* <a href="/api/auth/login">Login</a> */}
      <a href="/api/auth/signup">Signup</a>
      <a href="/api/auth/logout">Logout</a>
      {/* <LogOutBtn /> */}
    </header>
  );
}

export default Header;
