"use client";
import { useState } from "react";
import { useI18n } from "@/locales/client";
import NonAuthModal from "./NonAuthModal";
import NonAuthUser from "./NonAuthUser";

const AuthButtons = ({ user }: any) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const t = useI18n();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex items-center">
      {!user && (
        <div className="hidden xl:flex w-60 justify-around gap-2">
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
      <NonAuthUser onOpenModal={openModal} />
      <NonAuthModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AuthButtons;
