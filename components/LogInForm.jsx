"use client";
import React, { useState } from "react";
import Link from "next/link";

function LogInForm({ handleLogIn }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const handleClick = (e) => {
    e.preventDefault();
    handleLogIn(user.username, user.password);
  };
  return (
    <form className="bg-slate-100 w-2/3 rounded-lg flex flex-col p-10 gap-y-4  dark:bg-slate-700 ">
      <h2 className="text-2xl font-bold text-dark-green text-center dark:text-white">
        USER LOGIN
      </h2>
      <label
        htmlFor="username"
        className="text-xl font-semibold text-dark-green dark:text-white"
      >
        Username
      </label>
      <input
        type="text"
        id="username"
        placeholder="Username"
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
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
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
        <span>Forgot password?</span>
      </Link>
      <button
        onClick={handleClick}
        className="bg-medium-green text-white h-10 rounded-2xl transition hover:bg-dark-green "
      >
        Log In
      </button>
      <p className="text-slate-500">
        Don&apos;t have an account yet?{" "}
        <span className="text-dark-green hover:font-semibold cursor-pointer transition-colors duration-300 ease-in-out dark:text-white">
          Sign Up
        </span>
      </p>
    </form>
  );
}

export default LogInForm;
