"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useTranslation } from "react-i18next";
import { useI18n } from "../../locales/client";
function HeaderNavigationList() {
  const pathname = usePathname();
  const t = useI18n();
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
      </ul>
    </nav>
  );
}

export default HeaderNavigationList;
