import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("cartPage.title"),
    description: t("cartPage.description"),
  };
}

function CartLayout({ children }: IChildrenProps) {
  return <>{children}</>;
}

export default CartLayout;
