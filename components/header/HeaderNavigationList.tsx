"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "../../locales/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import AddProductsBtn from "../products/AddProductsBtn";

function HeaderNavigationList() {
  const pathname = usePathname();
  const t = useI18n();
  const { user } = useUser();

  return (
    <nav className="w-[500px]">
      <ul className="flex justify-between ">
        <li className="w-24 text-center ">
          <Link
            href="/"
            className={`link ${
              pathname === "/"
                ? " transition-all duration-300 hover:font-bold font-bold"
                : "w-16 transition-all duration-300 hover:font-bold "
            }`}
          >
            {t("home")}
          </Link>
        </li>
        <li className="w-24 text-center ">
          <Link
            href="/products"
            className={`link ${
              pathname === "/products"
                ? "w-16 transition-all duration-300 hover:font-bold font-bold"
                : "w-16 transition-all duration-300 hover:font-bold "
            }`}
          >
            {t("products")}
          </Link>
        </li>
        <li className="w-24 text-center ">
          <Link
            href="/about"
            className={`link ${
              pathname === "/products"
                ? " transition-all duration-300 hover:font-bold font-bold"
                : "transition-all duration-300 hover:font-bold "
            }`}
          >
            {t("about")}
          </Link>
        </li>

        <li className="w-24 text-center ">
          <Link
            href="/contact"
            className={`link ${
              pathname === "/contact"
                ? " transition-all duration-300 hover:font-bold font-bold"
                : "transition-all duration-300 hover:font-bold "
            }`}
          >
            {t("contact")}
          </Link>
        </li>
        <li className="w-24 text-center">
          <Link
            href="/blogs"
            className={`link ${
              pathname === "/blogs"
                ? "transition-all duration-300 hover:font-bold font-bold"
                : "transition-all duration-300 hover:font-bold "
            }`}
          >
            {t("blog")}
          </Link>
        </li>
        {user?.email === "admin@gmail.com" && (
          <li className="w-24 text-center">
            <Link
              href="/admin"
              className={`link ${
                pathname === "/admin"
                  ? "transition-all duration-300 hover:font-bold font-bold"
                  : "transition-all duration-300 hover:font-bold "
              }`}
            >
              {t("admin")}
            </Link>
          </li>
        )}
        {user && <AddProductsBtn />}
      </ul>
    </nav>
  );
}

export default HeaderNavigationList;
