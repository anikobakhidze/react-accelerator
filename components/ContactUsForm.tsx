"use client";
import { useTranslation } from "react-i18next";
function ContactUsForm() {
  const { t } = useTranslation();
  return (
    <form className="flex flex-col gap-3 max-w-container items-center justify-center w-800 ">
      <div className="flex justify-between mt-8 w-full ">
        <input
          type="text"
          placeholder={t("contactPage.name")}
          className="w-48% h-10 outline-none pl-3 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc]"
        />
        <input
          type="text"
          placeholder={t("contactPage.phone")}
          className="w-48% h-10 outline-none pl-3 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc]"
        />
      </div>
      <input
        type="email"
        placeholder={t("contactPage.email")}
        className="w-full h-10 outline-none pl-3 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc]"
      />
      <textarea
        placeholder={t("contactPage.message")}
        className="w-full h-24 outline-none pl-3 mb-6 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc] resize-x-none"
      />
      <button className="h-10 w-48 rounded-xl bg-[#5f8d8f] text-white hover:bg-[#9ec7d0]">
        {t("contactPage.contactUs")}
      </button>
    </form>
  );
}

export default ContactUsForm;
