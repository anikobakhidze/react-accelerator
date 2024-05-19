"use client";
import { useRouter } from "next/navigation";
import { useI18n } from "../../../locales/client";
function LogOutBtn() {
  const router = useRouter();
  const handleClick = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/logout`, {
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
