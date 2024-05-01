"use client";
import React from "react";
import Link from "next/link";
import ThemeSwitch from "../sharedComponents/UI/ThemeSwitch";
import LanguageChanger from "../sharedComponents/Language/LanguageChanger";
import LogInForm from "./LogInForm";
import { useTranslation } from "react-i18next";
function LogInContainer() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="max-w-md ">
        <div className="flex mb-4">
          <ThemeSwitch />
          <LanguageChanger />
        </div>
        <LogInForm />
        <div className="text-slate-400 mt-10">
          <p>
            {t("account")}
            <Link
              href="#"
              className="text-dark-orange hover: cursor-pointer transition-colors duration-300 ease-in-out dark:text-white ml-2 hover:text-black"
            >
              {t("signUp")}
            </Link>
          </p>
          <p>
            {t("forgotPassword")}?
            <Link
              href="#"
              className="text-dark-orange hover: cursor-pointer transition-colors duration-300 ease-in-out dark:text-white ml-2 hover:text-black"
            >
              {t("profilePage.resetPass")}
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LogInContainer;
