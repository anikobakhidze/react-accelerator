"use client";
import React, { useState } from "react";
import { useI18n } from "../../locales/client";
function UserProfileInfo() {
  const t = useI18n();
  const [userProfile, setUserProfile] = useState({
    name: "Anna",
    surname: "Kobakhidze",
    email: "kobakhidzeana23@gmail.com",
    password: "Password",
    confirmPassword: "Confirm Password",
  });
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile((prevProfile) => ({ ...prevProfile, name: e.target.value }));
  };
  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      surname: e.target.value,
    }));
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      email: e.target.value,
    }));
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      password: e.target.value,
    }));
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      confirmPassword: e.target.value,
    }));
  };
  return (
    <>
      <fieldset className="flex flex-col gap-4 w-2/6 h-80 ">
        <legend className="text-2xl font-bold text-teal-800 mb-4 w-full ">
          {t("profilePage.about")}
        </legend>
        <label htmlFor="name" className="text-xl font-semibold">
          {t("profilePage.name")}
        </label>
        <input
          className="h-10 text-lg pl-2 rounded-xl outline-none "
          id="name"
          type="text"
          value={userProfile.name}
          placeholder="Name"
          onChange={handleNameChange}
        />
        <label htmlFor="surname" className="text-xl font-semibold">
          {t("profilePage.surname")}
        </label>
        <input
          className="h-10 text-lg pl-2 rounded-xl outline-none "
          id="surname"
          type="text"
          value={userProfile.surname}
          placeholder="Surname"
          onChange={handleSurnameChange}
        />
        <label htmlFor="email" className="text-xl font-semibold">
          {t("profilePage.email")}
        </label>
        <input
          className="h-10 text-lg pl-2 rounded-xl outline-none "
          id="email"
          type="Email"
          placeholder="Email"
          value={userProfile.email}
          onChange={handleEmailChange}
        />
      </fieldset>
      <fieldset className="flex flex-col gap-4 w-2/6 h-80">
        <legend className="text-2xl font-bold text-teal-800 mb-4 w-full ">
          {t("profilePage.resetPass")}
        </legend>
        <label className="text-xl font-semibold" htmlFor="password">
          {t("profilePage.password")}
        </label>
        <input
          className="h-10 text-lg pl-2 rounded-xl outline-none focus:border-solid focus:border-2 focus:border-light-green"
          id="password"
          type="password"
          placeholder={t("profilePage.password")}
          onChange={handlePasswordChange}
        />
        <label className="text-xl font-semibold" htmlFor="confirmPassword">
          {t("profilePage.confirmPassword")}
        </label>
        <input
          className="h-10 text-lg pl-2 rounded-xl outline-none focus:border-solid focus:border-2 focus:border-light-green"
          id="confirmPassword"
          type="password"
          placeholder={t("profilePage.confirmPassword")}
          onChange={handleConfirmPasswordChange}
        />
        <button className="bg-medium-green text-white h-12 rounded-full text-xl hover:bg-teal-800">
          {t("profilePage.saveProfile")}
        </button>
      </fieldset>
    </>
  );
}

export default UserProfileInfo;
