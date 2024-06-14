"use server";
import { getI18n } from "@/locales/server";
import Heading from "@/components/sharedComponents/UI/Heading";
export default async function About() {
  const t = await getI18n();
  return (
    <section className="mt-36">
      <Heading heading={t("aboutPage.title")} />
    </section>
  );
}
