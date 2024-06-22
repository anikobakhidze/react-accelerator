import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("checkoutPage.checkout"),
    description: t("checkoutPage.title"),
  };
}

function ContactLayout({ children }: LayoutProps) {
  return <>{children}</>;
}

export default ContactLayout;
