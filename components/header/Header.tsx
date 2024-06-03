// "use client";
// import { useEffect } from "react";
import logo from "../../public/images/logo.svg";
// import { useUser } from "@auth0/nextjs-auth0/client";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfilePageButton from "../profile/ProfilePageButton";
import HeaderNavigationList from "./HeaderNavigationList";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "../sharedComponents/UI/ThemeSwitch";
import LanguageSwitcher from "../sharedComponents/Language/LanguageSwitcher";
import AddToCartBtn from "../cart/AddToCartBtn";
import { getSession } from "@auth0/nextjs-auth0";
// import { createUser } from "@/api";

async function Header() {
  const session = await getSession();
  const user = session?.user;
  // const { user } = useUser();
  // useEffect(() => {
  //   if (user) {
  //     createUser();
  //   }
  // }, [user]);

  return (
    <header className="flex justify-around items-center h-20 pt-6">
      <Link href="/">
        <Image src={logo} alt="logo" width={68} height={38} />
      </Link>
      <HeaderNavigationList />
      <div className="w-28 flex justify-between items-center">
        {user && <ProfilePageButton />}
        <ThemeSwitch />
        <AddToCartBtn />
        <button className="hidden md:hidden">
          <GiHamburgerMenu />
        </button>
      </div>
      <LanguageSwitcher />
      {user ? (
        <a href="/api/auth/logout">Logout</a>
      ) : (
        <>
          <a href="/api/auth/login">Login</a>
          <a href="/api/auth/signup">Signup</a>
        </>
      )}
    </header>
  );
}

export default Header;
