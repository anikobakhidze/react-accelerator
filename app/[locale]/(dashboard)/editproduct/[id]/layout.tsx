import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("editProduct.editProduct"),
    description: t("editProduct.description"),
  };
}

function EditProductLayout({ children }: IChildrenProps) {
  return <>{children}</>;
}

export default EditProductLayout;
