import React from "react";
import routesData from "../constants/routesData";
function HeaderNavigationList() {
  return (
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
  );
}

export default HeaderNavigationList;
