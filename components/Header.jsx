"use client";
import logo from "../public/logo.svg";
import Logo from "./Logo";
import { AiOutlineUser } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderButton from "./HeaderButton";
import HeaderNavigationList from "./HeaderNavigationList";
import { useRouter } from "next/navigation";
function Header() {
  const router = useRouter();

  const navigateToProfile = () => {
    router.push("/profile");
  };

  return (
    <header className="flex justify-around items-center h-20 pt-6 ">
      <Logo logo={logo} />
      <HeaderNavigationList />
      <div className="w-28 flex justify-between">
        <HeaderButton onClick={navigateToProfile}>
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
    </header>
  );
}

export default Header;
