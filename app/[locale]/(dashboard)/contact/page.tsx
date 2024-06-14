"use client";
import dynamic from "next/dynamic";
import contactData from "../../../../data/contactData";
import { useI18n } from "../../../../locales/client";
import Heading from "@/components/sharedComponents/UI/Heading";
import contactCover from "../../../../public/images/contactBg.webp";
import Image from "next/image";
const ContactUsForm = dynamic(
  () => import("../../../../components/contact/ContactUsForm"),
  { ssr: false }
);
const ContactCard = dynamic(
  () => import("../../../../components/contact/ContactCard"),
  { ssr: false }
);

export default function Contact() {
  const t = useI18n();

  return (
    <section className="flex flex-col overflow-auto items-center dark:bg-black  dark:bg-opacity-50 mt-32 ">
      <div className="flex flex-col justify-center items-center w-full font-bold  pb-10 dark:bg-black dark:bg-opacity-50">
        <div className="relative w-full h-[300px]  ">
          <Image
            src={contactCover}
            layout="fill"
            objectFit="cover"
            alt="ceramics"
          />
          <div className="absolute inset-0  dark:bg-gray-900 dark:bg-opacity-70 flex flex-col justify-center items-center"></div>
        </div>
        <div className="absolute flex ">
          <Heading heading={t("contactPage.contactUs")} />
        </div>
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
