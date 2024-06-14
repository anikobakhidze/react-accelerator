import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("contactPage.contact"),
    description: t("contactPage.description"),
  };
}

function ContactLayout({ children }: IChildrenProps) {
  return <>{children}</>;
}

export default ContactLayout;
