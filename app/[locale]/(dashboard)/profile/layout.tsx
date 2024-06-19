import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("mainTitle"),
    description: t("mainDescription"),
  };
}

function ProfileLayout({ children }: IChildrenProps) {
  return <>{children}</>;
}

export default ProfileLayout;
