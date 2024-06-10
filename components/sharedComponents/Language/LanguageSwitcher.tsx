"use client";
import { useChangeLocale, useCurrentLocale } from "../../../locales/client";
import { useI18n } from "../../../locales/client";
const LanguageSwitcher = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const t = useI18n();
  return (
    <div className="flex gap-2 items-center text-medium-green">
      <button
        onClick={() => changeLocale("en")}
        className={`${
          locale === "en"
            ? "w-6 h-6 md:w-8 md:h-8 rounded-full bg-btn-primary-color text-white text-xs md:text-base"
            : "w-6 h-6 md:w-8 md:h-8 rounded-full bg-white text-btn-primary-color text-xs md:text-base"
        } transition duration-300 hover:bg-btn-primary-color hover:text-white hover:opacity-80`}
      >
        {t("languages.eng")}
      </button>
      <div className="text-btn-primary-color text-lg sm:text-2xl">/</div>
      <button
        onClick={() => changeLocale("ka")}
        className={`${
          locale === "ka"
            ? "w-6 h-6 md:w-8 md:h-8 rounded-full bg-btn-primary-color text-white text-xs md:text-base"
            : "w-6 h-6 md:w-8 md:h-8 rounded-full bg-white text-btn-primary-color text-xs md:text-base"
        } transition duration-300 hover:bg-btn-primary-color hover:text-white hover:opacity-80`}
      >
        {t("languages.geo")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
