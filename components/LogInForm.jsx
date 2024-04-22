"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function LogInForm({ handleLogIn }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const handleClick = (e) => {
    e.preventDefault();
    handleLogIn(user.username, user.password).then(() =>
      window.location.reload()
    );
  };
  const { t } = useTranslation();
  return (
    <form className="bg-slate-100 w-2/3 rounded-lg flex flex-col p-10 gap-y-4  dark:bg-slate-700 ">
      <h2 className="text-2xl font-bold text-dark-green text-center dark:text-white">
        {t("login")}
      </h2>
      <label
        htmlFor="username"
        className="text-xl font-semibold text-dark-green dark:text-white"
      >
        {t("username")}
      </label>
      <input
        type="text"
        id="username"
        placeholder={t("username")}
        value={user.username}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, username: e.target.value }))
        }
        className="h-10 rounded-2xl outline-none pl-5 text-18 text-dark-green dark:text-white"
      />
      <label
        htmlFor="password"
        className="text-xl font-semibold text-dark-green dark:text-white"
      >
        {t("password")}
      </label>
      <input
        type="password"
        id="password"
        placeholder={t("password")}
        value={user.password}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, password: e.target.value }))
        }
        className="h-10 rounded-2xl outline-none pl-5 text-lg text-dark-green dark:text-white"
      />
      <Link
        href="#"
        className="text-slate-500 text-end transition-colors duration-300 ease-in-out hover:text-slate-800 dark:text-white dark:hover:text-light-green"
      >
        <span>{t("forgotPassword")}?</span>
      </Link>
      <button
        onClick={handleClick}
        className="bg-medium-green text-white h-10 rounded-2xl transition hover:bg-dark-green "
      >
        {t("logInBtn")}
      </button>
      <p className="text-slate-500">
        {t("account")}
        <span className="text-dark-green hover:font-semibold cursor-pointer transition-colors duration-300 ease-in-out dark:text-white">
          {t("signUp")}
        </span>
      </p>
    </form>
  );
}

export default LogInForm;
