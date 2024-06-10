// "use client";
// import { useEffect } from "react";
import logo from "../../public/images/logo.avif";
// import { useUser } from "@auth0/nextjs-auth0/client";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfilePageButton from "../profile/ProfilePageButton";
import HeaderNavigationList from "./HeaderNavigationList";
import Link from "next/link";
import Image from "next/image";

import AddToCartBtn from "../cart/AddToCartBtn";
import { getSession } from "@auth0/nextjs-auth0";
import SettingsPanel from "./SettingsPanel";
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
    <header>
      <SettingsPanel />
      <div className="flex justify-around items-center h-20 pt-6">
        <Link href="/">
          <Image src={logo} alt="logo" width={175} height={35} />
        </Link>
        <HeaderNavigationList />
        <div className="w-28 flex justify-between items-center">
          {user && <ProfilePageButton />}

          <AddToCartBtn />
          <button className="hidden md:hidden">
            <GiHamburgerMenu />
          </button>
        </div>

        {user ? (
          <a href="/api/auth/logout">Logout</a>
        ) : (
          <>
            <a href="/api/auth/login">Login</a>
            <a href="/api/auth/signup">Signup</a>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
