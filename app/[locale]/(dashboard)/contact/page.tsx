"use client";
import dynamic from "next/dynamic";
import contactData from "../../../../data/contactData";
import { useI18n } from "../../../../locales/client";
import Heading from "@/components/sharedComponents/UI/Heading";
const ContactUsForm = dynamic(
  () => import("../../../../components/contact/ContactUsForm"),
  { ssr: false }
);
const ContactCard = dynamic(
  () => import("../../../../components/contact/ContactCard"),
  { ssr: false }
);
const SocialIcons = dynamic(
  () => import("../../../../components/sharedComponents/UI/SocialIcons"),
  { ssr: false }
);

export default function Contact() {
  const t = useI18n();

  return (
    <section className="flex flex-col overflow-auto items-center dark:bg-black  dark:bg-opacity-50 mt-32 ">
      <div className="flex flex-col justify-center items-center h-80 w-full font-bold bg-light-bg-color pb-10 dark:bg-black dark:bg-opacity-50">
        <Heading heading={t("contactPage.contactUs")} />
        <SocialIcons />
      </div>
      <ContactUsForm />
      <div className="flex justify-between mt-8 w-1100 mb-10 ">
        {contactData.map((data) => (
          <ContactCard key={data.type} data={data} />
        ))}
      </div>
    </section>
  );
}
