import { PacmanLoader } from "react-spinners";
import { getI18n } from "@/locales/server";
export default async function MainLoading() {
  const t = await getI18n();
  return (
    <div className="flex  flex-col items-center justify-center  h-screen dark:bg-black ">
      <PacmanLoader color="#8d94b4" />
      <p className="text-btn-primary-color font-bold mt-6  text-xs md:text-lg">
        {t("loading")}
      </p>
    </div>
  );
}
