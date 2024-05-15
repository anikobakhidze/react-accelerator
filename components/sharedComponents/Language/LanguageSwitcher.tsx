"use client";
import { useChangeLocale, useCurrentLocale } from "../../../locales/client";
const LanguageSwitcher = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <>
      <div className="flex gap-2 items-center ml-6 text-medium-green">
        <button
          onClick={() => changeLocale("en")}
          className={`${
            locale === "en"
              ? "w-8 h-8 rounded-full bg-medium-green text-middle text-white"
              : "w-8 h-8 rounded-full bg-slate-200 text-middle text-medium-green"
          }`}
        >
          Eng
        </button>
        <div>/</div>
        <button
          onClick={() => changeLocale("ka")}
          className={`${
            locale === "ka"
              ? "w-8 h-8 rounded-full bg-medium-green text-middle text-white"
              : "w-8 h-8 rounded-full bg-slate-200 text-middle text-medium-green"
          }`}
        >
          Geo
        </button>
      </div>
    </>
  );
};

export default LanguageSwitcher;