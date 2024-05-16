import defaultUserImage from "../../public/images/default-user-image.webp";
import UserProfileInfo from "./UserProfileInfo";
import Image from "next/image";
import { getI18n } from "../../locales/server";
async function UserProfileSettings() {
  const t = await getI18n();
  return (
    <section className="flex  flex-1 flex-col bg-light-green py-14 dark:bg-slate-800">
      <h2 className="text-center text-3xl font-bold text-teal-800 mb-12">
        {t("profilePage.heading")}
      </h2>
      <form className="text-medium-green w-1100 mx-auto flex bg-slate-100 p-16 justify-between rounded-3xl items-center dark:bg-slate-600">
        <Image
          src={defaultUserImage}
          alt="user"
          className="w-60 h-60 rounded-full"
        />
        <UserProfileInfo />
      </form>
    </section>
  );
}

export default UserProfileSettings;
