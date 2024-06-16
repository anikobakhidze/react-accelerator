"use client";
import { useI18n } from "@/locales/client";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  const t = useI18n();
  return (
    <button
      onClick={() => router.back()}
      className="relative bg-btn-primary-color dark:bg-white dark:text-black py-2 px-4 text-white overflow-hidden group"
    >
      <span className="relative z-10 w-full h-full">{t("back")}</span>
      <span className="absolute left-0 bottom-0 w-full h-full bg-black dark:bg-btn-primary-color transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
    </button>
  );
}

export default BackButton;
