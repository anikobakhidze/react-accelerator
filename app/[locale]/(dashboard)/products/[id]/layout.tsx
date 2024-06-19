import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("product.title"),
    description: t("product.description"),
  };
}

export default function ProductDetailLayout({ children }: IChildrenProps) {
  return <>{children}</>;
}
