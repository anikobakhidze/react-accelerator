import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("editBlog.editBlog"),
    description: t("editBlog.description"),
  };
}

function EditBlogLayout({ children }: LayoutProps) {
  return <>{children}</>;
}

export default EditBlogLayout;
