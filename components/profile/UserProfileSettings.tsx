import UserProfileInfo from "./UserProfileInfo";
import { getI18n } from "../../locales/server";
import AvatarUpload from "./AvatarUpload";
import { getUser } from "@/api";
import Heading from "../sharedComponents/UI/Heading";
import { getSession } from "@auth0/nextjs-auth0";

async function UserProfileSettings() {
  const session = await getSession();
  const userId = session?.user.sub;

  const t = await getI18n();
  const userInfo = await getUser(userId);
  const userImage = userInfo.image;

  return (
    <section className="flex  flex-1 flex-col  py-14 dark:bg-black">
      <div className="lg:mt-32 md:mt-28 mt-24">
        <Heading heading={t("profilePage.heading")} />
      </div>
      <div className="text-medium-green w-2/3 mx-auto flex flex-col lg:flex-row bg-light-bg-color p-10 md:justify-center  rounded-3xl items-center dark:bg-black dark:opacity-70">
        <AvatarUpload userImage={userImage} />
        <UserProfileInfo userInfo={userInfo} />
      </div>
    </section>
  );
}

export default UserProfileSettings;
