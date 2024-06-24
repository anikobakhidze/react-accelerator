import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("myProducts.title"),
    description: t("myProducts.description"),
  };
}

function EditProductLayout({ children }: LayoutProps) {
  return <>{children}</>;
}

export default EditProductLayout;
