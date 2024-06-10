"use client";
import React, { useState } from "react";
import { useI18n } from "../../locales/client";
import { editUserAction } from "@/actions";
// import { getUser } from "@/api";

function UserProfileInfo({ userInfo }: { userInfo: UserInfo }) {
  const t = useI18n();
  const [userProfile, setUserProfile] = useState({
    name: userInfo.name || "",
    nickname: userInfo.nickname || "",
    sub: userInfo.sub || "",
    email: userInfo.email || "",
  });
  // const [loading, setLoading] = useState(true);
  const [updateMessage, setUpdateMessage] = useState("");

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const user = await getUser();
  //       if (user) {
  //         setUserProfile({
  //           name: user.name,
  //           nickname: user.nickname,
  //           sub: user.sub,
  //           email: user.email,
  //         });
  //       } else {
  //         console.error("User not found");
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch user", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, []);

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
      setUpdateMessage("Your profile is updated");
    } catch (error) {
      console.error("Failed to update user profile", error);
      setUpdateMessage("Failed to update profile");
    }
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {updateMessage && <div className="text-green-500">{updateMessage}</div>}
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-4 w-2/6 h-80">
          <legend className="text-2xl font-bold text-teal-800 mb-4 w-full">
            {t("profilePage.about")}
          </legend>
          <label htmlFor="name" className="text-xl font-semibold">
            {t("profilePage.name")}
          </label>
          <input
            className="h-10 text-lg pl-2 rounded-xl outline-none"
            id="name"
            type="text"
            value={userProfile.name}
            placeholder="Name"
            onChange={handleNameChange}
          />
          <label htmlFor="nickname" className="text-xl font-semibold">
            {t("profilePage.nickname")}
          </label>
          <input
            className="h-10 text-lg pl-2 rounded-xl outline-none"
            id="nickname"
            type="text"
            value={userProfile.nickname}
            placeholder="Nickname"
            onChange={handleNicknameChange}
          />
          <label htmlFor="email" className="text-xl font-semibold">
            {t("profilePage.email")}
          </label>
          <input
            className="h-10 text-lg pl-2 rounded-xl outline-none"
            id="email"
            type="email"
            placeholder="Email"
            value={userProfile.email}
            readOnly
          />
          <button
            type="submit"
            className="bg-medium-green text-white h-12 rounded-full text-xl hover:bg-teal-800"
          >
            {t("profilePage.saveProfile")}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default UserProfileInfo;
