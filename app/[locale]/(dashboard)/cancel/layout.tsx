import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("canceledPage.title"),
    description: t("canceledPage.paymentCanceled"),
  };
}

function ProfileLayout({ children }: LayoutProps) {
  return <>{children}</>;
}

export default ProfileLayout;
