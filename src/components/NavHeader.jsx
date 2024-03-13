import React from "react";
function NavHeader() {
  return (
    <nav className="nav-header-container">
      <ul className="nav-list-container">
        <nav className="nav-container">
          <ul className="nav-list-container">
            <li className="nav-list">
              <a href="/">Home</a>
            </li>
            <li className="nav-list">
              <a href="/">Products</a>
            </li>
            <li className="nav-list">
              <a href="/">About</a>
            </li>
            <li className="nav-list">
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </ul>
    </nav>
  );
}

export default NavHeader;
