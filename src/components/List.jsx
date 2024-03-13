import React from "react";

function List({ href = "/", className = "nav-list", text }) {
  return (
    <li className={className}>
      <a href={href}>{text}</a>
    </li>
  );
}

export default List;
