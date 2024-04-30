"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import ThemeSwitch from "../sharedComponents/UI/ThemeSwitch";
import LanguageChanger from "../sharedComponents/Language/LanguageChanger";
import { IoLockClosedOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsUnlock } from "react-icons/bs";

import logoPng from "../../public/images/logoPng.png";
import Image from "next/image";
function LogInForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    });

    router.push("/");
  };
  const { t } = useTranslation();

  const tooglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="max-w-md ">
      <div className="flex mb-4">
        <ThemeSwitch />
        <LanguageChanger />
      </div>
      <form className="border-b-light-green border-b-2 pb-10">
        <Image src={logoPng} alt="shopswift logo" height={100} width={200} />
        <p className="text-slate-400">
          To access your account, please sign in below.
        </p>
        <h2 className="text-4xl my-6 font-bold">{t("login")}</h2>

        {/* <label
          htmlFor="username"
          className="text-xl font-semibold text-dark-green dark:text-white"
        >
          {t("username")}
        </label> */}
        <div className="flex items-center mb-6 bg-light-orange rounded-2xl pl-4">
          <div>
            <HiOutlineMailOpen className="h-12 w-6 text-dark-orange" />
          </div>
          <input
            type="text"
            id="username"
            placeholder={t("username")}
            required
            value={user.username}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, username: e.target.value }))
            }
            className="h-12 w-full rounded-2xl bg-light-orange outline-none pl-5 text-18 text-dark-green dark:text-white selection:inherit"
          />
        </div>
        {/* <label
          htmlFor="password"
          className="text-xl font-semibold text-dark-green dark:text-white"
        >
          {t("password")}
        </label> */}
        <div className="flex items-center mb-6 bg-light-orange rounded-2xl px-4">
          <div>
            {showPassword ? (
              <BsUnlock
                className="h-12 w-6 text-dark-orange"
                onClick={tooglePassword}
              />
            ) : (
              <IoLockClosedOutline
                className="h-12 w-6 text-dark-orange"
                onClick={tooglePassword}
              />
            )}
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder={t("password")}
            autoComplete="off"
            required
            value={user.password}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
            className="h-12 w-full rounded-2xl bg-light-orange outline-none pl-5 text-18 text-dark-green dark:text-white"
          />
        </div>
        <button
          type="submit"
          onClick={handleClick}
          className="bg-dark-orange text-white h-10 w-80 rounded-2xl transition hover:bg-light-orange hover:border-2 hover:border-dark-orange  hover:text-dark-orange"
        >
          {t("logInBtn")}
        </button>
        {/* <p className="text-slate-400">
          {t("account")}
          <span className="text-dark-orange hover: cursor-pointer transition-colors duration-300 ease-in-out dark:text-white">
            {t("signUp")}
          </span>
        </p> */}
      </form>
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
          Forgot password ?{" "}
          <Link
            href="#"
            className="text-dark-orange hover: cursor-pointer transition-colors duration-300 ease-in-out dark:text-white ml-2 hover:text-black"
          >
            Reset Password
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogInForm;
