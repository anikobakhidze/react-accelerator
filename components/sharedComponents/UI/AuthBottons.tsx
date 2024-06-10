"use client";
import { useI18n } from "@/locales/client";

const AuthButtons = ({ user }: any) => {
  const t = useI18n();
  return (
    <div className="w-40 flex justify-around gap-4">
      {user ? (
        <a href="/api/auth/logout" className="relative w-24 py-2 px-4">
          {t("auth.logOut")}
        </a>
      ) : (
        <>
          <a
            href="/api/auth/login"
            className="relative w-24 bg-btn-primary-color py-2 px-4 text-white overflow-hidden group  hover:text-btn-primary-color"
          >
            <span className="relative z-10"> {t("auth.logIn")}</span>
            <span className="absolute left-0 bottom-0 w-full h-full bg-light-bg-color text-btn-primary-color transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
          </a>
          <a
            href="/api/auth/signup"
            className="relative w-24 bg-light-bg-color py-2 px-4 text-btn-primary-color overflow-hidden group hover:text-white"
          >
            <span className="relative z-10"> {t("auth.signUp")}</span>
            <span className="absolute left-0 bottom-0 w-full h-full bg-btn-primary-color transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
          </a>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
