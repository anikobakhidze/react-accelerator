"use client";
import { useRouter } from "next/navigation";
// import { useTranslation } from "react-i18next";
import { useI18n } from "../../../locales/client";
function LogOutBtn() {
  const router = useRouter();
  const handleClick = async () => {
    await fetch("/api/logout", {
      method: "GET",
    });

    router.push("/login");
  };
  const t = useI18n();
  return (
    <button
      onClick={handleClick}
      className="w-24 bg-medium-green text-white rounded-3xl h-8 hover:bg-dark-green"
    >
      {t("logout")}
    </button>
  );
}

export default LogOutBtn;
