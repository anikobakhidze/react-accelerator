"use client";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
function LogOutBtn() {
  const router = useRouter();
  const handleClick = async () => {
    await fetch("/login/api/logout", {
      method: "GET",
    });
    console.log("anna");
    router.push("/login");
  };
  const { t } = useTranslation();
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
