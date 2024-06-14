import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("aboutPage.title"),
    description: t("aboutPage.description"),
  };
}

function AboutLayout({ children }: IChildrenProps) {
  return <>{children}</>;
}

export default AboutLayout;
