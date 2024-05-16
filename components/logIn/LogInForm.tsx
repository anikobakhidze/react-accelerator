"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoLockClosedOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsUnlock } from "react-icons/bs";
import { useI18n } from "../../locales/client";
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
  const t = useI18n();

  const tooglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <form className="border-b-light-green border-b-2 pb-10">
      <p className="text-slate-400">
        To access your account, please sign in below.
      </p>
      <h2 className="text-4xl my-6 font-bold">{t("login")}</h2>
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
          className="h-12 w-full rounded-2xl bg-light-orange outline-none pl-5 text-18 text-dark-green dark:text-white "
        />
      </div>

      <div className="flex items-center mb-6 bg-light-orange rounded-2xl pl-4">
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
          className="h-12 w-full rounded-2xl bg-light-orange outline-none pl-5 text-18 text-dark-green dark:text-white "
        />
      </div>
      <button
        type="submit"
        onClick={handleClick}
        className="bg-dark-orange text-white h-10 w-80 rounded-2xl transition hover:bg-light-orange hover:border-2 hover:border-dark-orange  hover:text-dark-orange"
      >
        {t("logInBtn")}
      </button>
    </form>
  );
}

export default LogInForm;
