import React from "react";

function Logo({ logo }) {
  return (
    <a href="/">
      <img src={logo} alt="logo" />
    </a>
  );
}

export default Logo;
