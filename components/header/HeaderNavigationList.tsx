"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "../../locales/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import AddProductsBtn from "../products/AddProductsBtn";
import { hasUserRole } from "@/utils/userRole";
import AddBlogBtn from "../blog/AddBlogBtn";
function HeaderNavigationList() {
  const pathname = usePathname();
  const t = useI18n();
  const { user } = useUser();

  return (
    <nav className="h-full flex items-center">
      <ul className="flex justify-between ">
        <li className="w-24 text-center ">
          <Link
            href="/"
            className={`link ${
              pathname === "/"
                ? "w-16  transition-all duration-300 font-bold"
                : "w-16 transition-all duration-300  "
            } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
          >
            {t("home")}
          </Link>
        </li>
        <li className="w-24 text-center ">
          <Link
            href="/products"
            className={`link ${
              pathname === "/products"
                ? "w-16  transition-all duration-300 font-bold"
                : "w-16 transition-all duration-300  "
            } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
          >
            {t("products")}
          </Link>
        </li>
        <li className="w-24 text-center ">
          <Link
            href="/about"
            className={`link ${
              pathname === "/products"
                ? "w-16  transition-all duration-300 font-bold"
                : "w-16 transition-all duration-300  "
            } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
          >
            {t("about")}
          </Link>
        </li>
        <li className="w-24 text-center">
          <Link
            href="/blogs"
            className={`link ${
              pathname === "/blogs"
                ? "w-16  transition-all duration-300 font-bold"
                : "w-16 transition-all duration-300  "
            } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
          >
            {t("blog")}
          </Link>
        </li>

        <li className="w-24 text-center ">
          <Link
            href="/contact"
            className={`link ${
              pathname === "/contact"
                ? "w-16  transition-all duration-300 font-bold"
                : "w-16 transition-all duration-300  "
            } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
          >
            {t("contact")}
          </Link>
        </li>

        {hasUserRole(user) && user.role[0] === "admin" && (
          <>
            <li className="w-24 text-center">
              <Link
                href="/admin"
                className={`link ${
                  pathname === "/admin"
                    ? "w-16  transition-all duration-300 font-bold"
                    : "w-16 transition-all duration-300  "
                } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
              >
                {t("admin")}
              </Link>
            </li>
            <AddBlogBtn />
          </>
        )}
        {user && <AddProductsBtn />}
      </ul>
    </nav>
  );
}

export default HeaderNavigationList;
