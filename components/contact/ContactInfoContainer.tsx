"use client";
import { useI18n } from "@/locales/client";
import ContactCard from "./ContactCard";
function ContactInfoContainer() {
  const t = useI18n();
  const contactData = [
    {
      type: "mobile",
      title: "(+995)577000000",
      paragraph: t("contactPage.mobileP"),
      href: "tel:+995577000000",
    },
    {
      type: "email",
      title: "earthen@earthen.com",
      paragraph: t("contactPage.emailP"),
      href: "mailto:earthen@earthen.com",
    },
    {
      type: "address",
      title: "123 Street, City, Country",
      paragraph: t("contactPage.addressP"),
    },
  ];
  return (
    <div className="flex flex-col gap-3 items-center lg:flex-row lg:justify-between mt-8 lg:w-1000 xl:w-1100 mb-10 mx-auto">
      {contactData.map((data) => (
        <ContactCard key={data.type} data={data} />
      ))}
    </div>
  );
}

export default ContactInfoContainer;
