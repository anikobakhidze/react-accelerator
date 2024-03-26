import React from "react";
import routesData from "../constants/routesData";
import { NavLink } from "react-router-dom";
function HeaderNavigationList() {
  return (
    <nav className="w-2/6">
      <ul className="flex justify-between ">
        <li className="w-16 transition-all duration-300 hover:font-bold text-center">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="w-16 transition-all duration-300 hover:font-bold text-center">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="w-16 transition-all duration-300 hover:font-bold text-center">
          <NavLink to="/about">About</NavLink>
        </li>

        <li className="w-16 transition-all duration-300 hover:font-bold text-center active:font-bold ">
          <NavLink to={routesData.CONTACT}>Contact</NavLink>
        </li>
        <li className="w-16 transition-all duration-300 hover:font-bold text-center ">
          <NavLink to={routesData.BLOGS}>Blogs</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigationList;
