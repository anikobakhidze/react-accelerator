import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("mainTitle"),
    description: t("mainDescription"),
  };
}

function ProfileLayout({ children }: LayoutProps) {
  return <>{children}</>;
}

export default ProfileLayout;
