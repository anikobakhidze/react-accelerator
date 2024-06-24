import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("adminPage.title"),
    description: t("adminPage.description"),
  };
}

function AdminLayout({ children }: LayoutProps) {
  return <>{children}</>;
}

export default AdminLayout;
