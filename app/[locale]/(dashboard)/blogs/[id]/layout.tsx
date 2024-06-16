import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("blogsPage.blog"),
    description: t("blogsPage.description"),
  };
}

function BlogsLayout({ children }: IChildrenProps) {
  return <>{children}</>;
}

export default BlogsLayout;
