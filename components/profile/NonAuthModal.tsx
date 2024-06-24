"use client";
import { useEffect, useRef } from "react";
import { useI18n } from "@/locales/client";
import { useRouter } from "next/navigation";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { BsBox2Heart } from "react-icons/bs";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
interface NonAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NonAuthModal: React.FC<NonAuthModalProps> = ({ isOpen, onClose }) => {
  const t = useI18n();
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const handleProfileClick = () => {
    if (user) {
      router.push("/profile");
    } else {
      onClose();
    }
  };

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
      className={`fixed inset-0 flex  bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        ref={modalRef}
        className="absolute top-20 right-10 md:top-28 md:right-14 lg:right-16 bg-white dark:bg-gray-800  dark:bg-opacity-50 p-4 md:p-8  shadow-lg rounded-lg"
      >
        {user ? (
          <div className="flex flex-col gap-4 p-2  ">
            <h4 className="text-base md:text-lg font-semibold text-gray-800  dark:text-white">
              {t("hello")}, {user.nickname}
            </h4>
            <button
              onClick={handleProfileClick}
              className="flex items-center gap-2 text-black  hover:opacity-75 transition-colors duration-300 dark:text-white"
            >
              <LuUser className="text-lg" />
              <span>{t("profilePage.profile")}</span>
            </button>
            <Link
              href="myproducts"
              className="flex items-center gap-2 text-black  hover:opacity-75 transition-colors duration-300 dark:text-white"
            >
              <BsBox2Heart />
              <span>{t("myProducts.products")}</span>
            </Link>
            <a
              href="/api/auth/logout"
              className="flex items-center gap-2   text-btn-primary-color  hover:opacity-75 transition-colors duration-300 "
            >
              <IoIosLogOut className="text-lg" />
              <span>{t("auth.logOut")}</span>
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <a
              href="/api/auth/login"
              className="flex items-center gap-2   hover:opacity-75 transition-colors duration-300"
            >
              <IoIosLogIn className="text-lg" />
              <span>{t("auth.logIn")}</span>
            </a>

            <a
              href="/api/auth/signup"
              className="flex items-center gap-2   text-btn-primary-color  hover:opacity-75 transition-colors duration-300"
            >
              <LiaCashRegisterSolid className="text-lg" />
              <span>{t("auth.signUp")}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NonAuthModal;
