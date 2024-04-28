"use client";
import contactData from "../../../../data/contactData";
import ContactUsForm from "../../../../components/ContactUsForm";
import ContactCard from "../../../../components/ContactCard";
import SocialIcons from "../../../../components/SocialIcons";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col overflow-auto items-center dark:bg-slate-800 ">
      <div className="flex flex-col justify-center items-center h-80 w-full font-bold bg-[#c7d8dc] pb-10 dark:bg-slate-800">
        <h2 className="pt-8 text-3xl ">{t("contactPage.contactUs")}</h2>
        <SocialIcons />
      </div>
      <ContactUsForm />
      <div className="flex justify-between mt-8 w-1100 mb-10">
        {contactData.map((data) => (
          <ContactCard key={data.type} data={data} />
        ))}
      </div>
    </section>
  );
}
