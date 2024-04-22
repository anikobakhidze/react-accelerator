"use client";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
function LogOutBtn({ handleLogOut }) {
  const router = useRouter();
  const handleClick = () => {
    handleLogOut().then(() => window.location.reload());
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
