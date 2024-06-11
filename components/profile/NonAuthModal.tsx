import { useEffect, useRef } from "react";
import { useI18n } from "@/locales/client";
import { useRouter } from "next/navigation";
import AddProductsBtn from "../products/AddProductsBtn";
import AddBlogBtn from "../blog/AddBlogBtn";
import { hasUserRole } from "@/utils/userRole";
interface NonAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

const NonAuthModal: React.FC<NonAuthModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  const t = useI18n();
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleProfileClick = () => {
    if (user) {
      router.push("/profile");
    } else {
      onClose();
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <div
      className={`fixed inset-0 flex  bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        ref={modalRef}
        className="absolute top-20 right-10 md:top-28 md:right-14 lg:right-16 bg-white dark:bg-dark-medium-bg p-8  shadow-lg rounded-lg"
      >
        {user ? (
          <div className="flex flex-col gap-4">
            <div className="xl:hidden">{user && <AddProductsBtn />}</div>
            <div className="xl:hidden">
              {hasUserRole(user) && user.role[0] === "admin" && <AddBlogBtn />}
            </div>
            <button
              onClick={handleProfileClick}
              className="relative bg-btn-primary-color py-2 px-4 text-white overflow-hidden group hover:text-btn-primary-color"
            >
              <span className="relative z-10"> {t("profilePage.profile")}</span>
              <span className="absolute left-0 bottom-0 w-full h-full bg-light-bg-color text-btn-primary-color transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </button>
            <a
              href="/api/auth/logout"
              className="relative bg-btn-primary-color py-2 px-4 text-white overflow-hidden group hover:text-btn-primary-color"
            >
              <span className="relative z-10">{t("auth.logOut")}</span>
              <span className="absolute left-0 bottom-0 w-full h-full bg-light-bg-color text-btn-primary-color transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <a
              href="/api/auth/login"
              className="relative bg-btn-primary-color py-2 px-4 text-white overflow-hidden group hover:text-btn-primary-color"
            >
              <span className="relative z-10">{t("auth.logIn")}</span>
              <span className="absolute left-0 bottom-0 w-full h-full bg-light-bg-color text-btn-primary-color transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </a>
            <a
              href="/api/auth/signup"
              className="relative bg-light-bg-color py-2 px-4 text-btn-primary-color overflow-hidden group hover:text-white"
            >
              <span className="relative z-10">{t("auth.signUp")}</span>
              <span className="absolute left-0 bottom-0 w-full h-full bg-btn-primary-color transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NonAuthModal;
