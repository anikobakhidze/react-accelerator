"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/locales/client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { hasUserRole } from "@/utils/userRole";

interface BurgerMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

const BurgerMenuModal: React.FC<BurgerMenuModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  const t = useI18n();
  const pathname = usePathname();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      window.addEventListener("resize", onClose);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", onClose);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", onClose);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 flex items-start bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        ref={modalRef}
        className="absolute top-4 right-16 w-40 md:top-8 md:right-24 bg-white p-4 md:p-8 rounded-lg dark:bg-dark-medium-bg shadow-lg md:w-full max-w-xs mx-auto mt-20"
      >
        <nav className="flex-1 h-full flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <ul className="flex flex-col items-center space-y-4 md:space-y-6">
            <li className="text-center">
              <Link
                href="/"
                className={`link ${
                  pathname === "/"
                    ? "transition-all duration-300 font-bold border-b-2 border-btn-primary-color"
                    : "transition-all duration-300"
                } px-4 py-1 md:px-6 md:py-2 text-sm md:text-base hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
                onClick={onClose}
              >
                {t("home")}
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/products"
                className={`link ${
                  pathname === "/products"
                    ? "transition-all duration-300 font-bold border-b-2 border-btn-primary-color"
                    : "transition-all duration-300"
                } px-4 py-1 md:px-6 md:py-2 text-sm md:text-base hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
                onClick={onClose}
              >
                {t("products")}
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/about"
                className={`link ${
                  pathname === "/about"
                    ? "transition-all duration-300 font-bold border-b-2 border-btn-primary-color"
                    : "transition-all duration-300"
                } px-4 py-1 md:px-6 md:py-2 text-sm md:text-base hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
                onClick={onClose}
              >
                {t("about")}
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/blogs"
                className={`link ${
                  pathname === "/blogs"
                    ? "transition-all duration-300 font-bold border-b-2 border-btn-primary-color"
                    : "transition-all duration-300"
                } px-4 py-1 md:px-6 md:py-2 text-sm md:text-base hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
                onClick={onClose}
              >
                {t("blogsPage.blog")}
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/contact"
                className={`link ${
                  pathname === "/contact"
                    ? "transition-all duration-300 font-bold border-b-2 border-btn-primary-color"
                    : "transition-all duration-300"
                } px-4 py-1 md:px-6 md:py-2 text-sm md:text-base hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
                onClick={onClose}
              >
                {t("contactPage.contact")}
              </Link>
            </li>
            {hasUserRole(user) && user.role[0] === "admin" && (
              <li className="text-center">
                <Link
                  href="/admin"
                  className={`link ${
                    pathname === "/admin"
                      ? "transition-all duration-300 font-bold border-b-2 border-btn-primary-color"
                      : "transition-all duration-300"
                  } px-4 py-1 md:px-6 md:py-2 text-sm md:text-base hover:font-bold hover:border-b-2 hover:border-btn-primary-color`}
                  onClick={onClose}
                >
                  {t("admin")}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenuModal;
