import React from "react";
import logo from "../assets/images/logo.svg";
import { ImSearch } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import NavHeader from "./NavHeader";
import Logo from "./Logo";
function Header() {
  return (
    <header className="header-container">
      <Logo logo={logo} />
      <NavHeader />
      <div className="header-icons-container">
        <ImSearch className="header-icon" />
        <AiOutlineUser className="header-icon" />
        <FaCartShopping className="header-icon" />
      </div>
    </header>
  );
}

export default Header;
