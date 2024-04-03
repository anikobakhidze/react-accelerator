"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function HeaderNavigationList() {
  const pathname = usePathname();
  return (
    <nav className="w-96">
      <ul className="flex justify-between ">
        <li className="w-16 text-center ">
          <Link
            href="/"
            className={`link ${
              pathname === "/"
                ? " transition-all duration-300 hover:font-bold font-bold"
                : "w-16 transition-all duration-300 hover:font-bold "
            }`}
          >
            Home
          </Link>
        </li>
        <li className="w-16 text-center ">
          <Link
            href="/products"
            className={`link ${
              pathname === "/products"
                ? "w-16 transition-all duration-300 hover:font-bold font-bold"
                : "w-16 transition-all duration-300 hover:font-bold "
            }`}
          >
            Products
          </Link>
        </li>
        <li className="w-16 text-center ">
          <Link
            href="/about"
            className={`link ${
              pathname === "/products"
                ? " transition-all duration-300 hover:font-bold font-bold"
                : "transition-all duration-300 hover:font-bold "
            }`}
          >
            About
          </Link>
        </li>

        <li className="w-16 text-center ">
          <Link
            href="/contact"
            className={`link ${
              pathname === "/contact"
                ? " transition-all duration-300 hover:font-bold font-bold"
                : "transition-all duration-300 hover:font-bold "
            }`}
          >
            Contact
          </Link>
        </li>
        <li className="w-16 text-center">
          <Link
            href="/blogs"
            className={`link ${
              pathname === "/blogs"
                ? "transition-all duration-300 hover:font-bold font-bold"
                : "transition-all duration-300 hover:font-bold "
            }`}
          >
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigationList;
