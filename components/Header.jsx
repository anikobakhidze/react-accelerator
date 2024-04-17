"use server";
import logo from "../public/logo.svg";
import { AiOutlineUser } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderButton from "./HeaderButton";
import HeaderNavigationList from "./HeaderNavigationList";
import Link from "next/link";
import Image from "next/image";
import { logout } from "@/app/actions";
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
      <div className="w-28 flex justify-between">
        <HeaderButton>
          <AiOutlineUser className="w-5 h-5 " />
        </HeaderButton>
        <HeaderButton>
          <FaCartShopping />
        </HeaderButton>
        <button>
          <FiSun className="text-[#4abca9]" />
        </button>
      </div>
      <button className="hidden md:hidden">
        <GiHamburgerMenu />
      </button>
      <button onClick={handleLogOut}>LogOut</button>
    </header>
  );
}

export default Header;
