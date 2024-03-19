import logo from "../assets/images/logo.svg";
import Logo from "./Logo";
import { AiOutlineUser } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderButton from "./HeaderButton";
import routesData from "../constants/routesData";
function Header() {
  return (
    <header className="flex justify-around items-center h-20 pt-6">
      <Logo logo={logo} />
      <nav className="w-80">
        <ul className="flex justify-around ">
          <li className="w-16 transition-all duration-300 hover:font-bold text-center">
            <a href="/">Home</a>
          </li>
          <li className="w-16 transition-all duration-300 hover:font-bold text-center">
            <a href="/">Products</a>
          </li>
          <li className="w-16 transition-all duration-300 hover:font-bold text-center">
            <a href="/">About</a>
          </li>
          <li className="w-16 transition-all duration-300 hover:font-bold text-center">
            <a href={routesData.CONTACT}>Contact</a>
          </li>
        </ul>
      </nav>
      <div className="w-28 flex justify-between">
        <HeaderButton>
          <AiOutlineUser className="w-5 h-5" />
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
