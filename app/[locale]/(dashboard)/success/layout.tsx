import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("successPage.title"),
    description: t("successPage.paymentSuccess"),
  };
}

function SuccessLayout({ children }: LayoutProps) {
  return <>{children}</>;
}

export default SuccessLayout;
