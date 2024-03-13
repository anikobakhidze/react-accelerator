import React from "react";

function Logo({ href = "/", logo }) {
  return (
    <a href={href}>
      <img src={logo} alt="logo" />
    </a>
  );
}

export default Logo;
