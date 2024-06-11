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
    <nav className="flex-1 h-full lg:flex items-center justify-center hidden ">
      <ul className="flex justify-center items-center space-x-6">
        <li className="text-center">
          <Link
            href="/"
            className={`link ${
              pathname === "/"
                ? "transition-all duration-300 font-bold border-b-2  border-btn-primary-color"
                : "transition-all duration-300 "
            } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
          >
            {t("home")}
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="/products"
            className={`link ${
              pathname === "/products"
                ? "transition-all duration-300 font-bold border-b-2  border-btn-primary-color"
                : "transition-all duration-300"
            } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
          >
            {t("products")}
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="/about"
            className={`link ${
              pathname === "/about"
                ? "transition-all duration-300 font-bold border-b-2  border-btn-primary-color"
                : "transition-all duration-300"
            } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
          >
            {t("about")}
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="/blogs"
            className={`link ${
              pathname === "/blogs"
                ? "transition-all duration-300 font-bold border-b-2  border-btn-primary-color"
                : "transition-all duration-300"
            } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
          >
            {t("blog")}
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="/contact"
            className={`link ${
              pathname === "/contact"
                ? "transition-all duration-300 font-bold border-b-2  border-btn-primary-color "
                : "transition-all duration-300"
            } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
          >
            {t("contact")}
          </Link>
        </li>
        {hasUserRole(user) && user.role[0] === "admin" && (
          <>
            <li className="text-center">
              <Link
                href="/admin"
                className={`link ${
                  pathname === "/admin"
                    ? "transition-all duration-300 font-bold border-b-2  border-btn-primary-color"
                    : "transition-all duration-300"
                } px-6 py-2 hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
              >
                {t("admin")}
              </Link>
            </li>
            <li className="hidden xl:flex">
              <AddBlogBtn />
            </li>
          </>
        )}
        <li className="hidden xl:flex">{user && <AddProductsBtn />}</li>
      </ul>
    </nav>
  );
}

export default HeaderNavigationList;
