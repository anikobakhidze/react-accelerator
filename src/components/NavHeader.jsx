import React from "react";
import List from "./List";
function NavHeader() {
  return (
    <nav className="nav-header-container">
      <ul className="nav-list-container">
        <List text="Home" />
        <List text="Products" />
        <List text="About" />
        <List text="Contact" />
      </ul>
    </nav>
  );
}

export default NavHeader;
