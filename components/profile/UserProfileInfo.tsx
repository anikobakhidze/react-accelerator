"use client";
import React, { useState, useEffect } from "react";
import { useI18n } from "../../locales/client";
import { editUserAction } from "@/actions";

function UserProfileInfo({ userInfo }: { userInfo: UserInfo }) {
  const t = useI18n();
  const [userProfile, setUserProfile] = useState({
    name: userInfo.name || "",
    nickname: userInfo.nickname || "",
    sub: userInfo.sub || "",
    email: userInfo.email || "",
  });
  const [originalProfile, setOriginalProfile] = useState(userProfile);
  const [updateMessage, setUpdateMessage] = useState("");

  useEffect(() => {
    setOriginalProfile(userProfile);
  }, [userProfile]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      name: e.target.value,
    }));
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      nickname: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userProfile.name);
    formData.append("nickname", userProfile.nickname);

    try {
      await editUserAction(formData);
      setOriginalProfile(userProfile);
      setUpdateMessage("Your profile is updated");
    } catch (error) {
      console.error("Failed to update user profile", error);
      setUpdateMessage("Failed to update profile");
    }
  };

  const isSaveDisabled = () => {
    return (
      userProfile.name === originalProfile.name &&
      userProfile.nickname === originalProfile.nickname
    );
  };

  return (
    <div className="max-980:w-full w-1/2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 w-full"
      >
        <fieldset className="flex flex-col gap-4 w-full h-auto">
          <legend className="text-lg md:text-xl lg:text-2xl font-bold text-btn-primary-color mb-4 w-full">
            {t("profilePage.about")}
          </legend>
          <label
            htmlFor="name"
            className="text-base md:text-lg lg:text-xl font-semibold"
          >
            {t("profilePage.name")}
          </label>
          <input
            className=" h-8 md:h-10 text-base  lg:text-lg pl-2 rounded-xl outline-none  dark:bg-gray-800 dark:text-white"
            id="name"
            type="text"
            value={userProfile.name}
            placeholder="Name"
            onChange={handleNameChange}
          />
          <label
            htmlFor="nickname"
            className="text-base md:text-lg lg:text-xl font-semibold"
          >
            {t("profilePage.nickname")}
          </label>
          <input
            className=" h-8 md:h-10 text-base  lg:text-lg pl-2 rounded-xl outline-none  dark:bg-gray-800 dark:text-white"
            id="nickname"
            type="text"
            value={userProfile.nickname}
            placeholder="Nickname"
            onChange={handleNicknameChange}
          />
          <label
            htmlFor="email"
            className="text-base md:text-lg lg:text-xl font-semibold"
          >
            {t("profilePage.email")}
          </label>
          <input
            className=" h-8 md:h-10 text-base  lg:text-lg pl-2 rounded-xl outline-none  dark:bg-gray-800 dark:text-white"
            id="email"
            type="email"
            placeholder="Email"
            value={userProfile.email}
            readOnly
          />
          <button
            type="submit"
            className={`bg-btn-primary-color cursor-pointer  text-white h-10 lg:h-12 rounded-full text-base lg:text-xl  hover:text-btn-primary-color hover:opacity-50 dark:text-black  dark:bg-white `}
            disabled={isSaveDisabled()}
          >
            {t("profilePage.saveProfile")}
          </button>
        </fieldset>
      </form>
      {updateMessage && (
        <div
          className={`text-base pt-4 text-center font-bold ${
            updateMessage.includes("Failed")
              ? "text-dark-cream-color"
              : "text-btn-primary-color"
          } animate-fadeInUp`}
        >
          {updateMessage}
        </div>
      )}
    </div>
  );
}

export default UserProfileInfo;
