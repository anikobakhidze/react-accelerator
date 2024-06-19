import { PacmanLoader } from "react-spinners";
import { getI18n } from "@/locales/server";
export default async function AboutLoading() {
  const t = await getI18n();
  return (
    <div className="flex flex-1 flex-col items-center justify-center h-[100vh]  dark:bg-black mt-56 mb-32 px-3">
      <PacmanLoader color="#8d94b4" />
      <p className="text-btn-primary-color font-bold mt-6  text-xs md:text-lg">
        {t("loading")}
      </p>
    </div>
  );
}
