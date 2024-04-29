"use server";
import LogInForm from "@/components/logIn/LogInForm";
import ThemeSwitch from "@/components/sharedComponents/UI/ThemeSwitch";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../../components/sharedComponents/Language/TranslationProvides";
import LanguageChanger from "@/components/sharedComponents/Language/LanguageChanger";
import gif from "../../../public/gif/gif.gif";
import Image from "next/image";
export default async function LogIn({ params: { locale } }: IParamsProps) {
  const i18nNamespaces = ["common"];
  const { t, resources } = await initTranslations(
    locale,
    i18nNamespaces,
    null,
    undefined
  );

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="w-full h-[100vh] flex flex-col items-center justify-around bg-[#b2babe] dark:bg-slate-800 ">
        {/* <div className="flex items-center ">
          <h1 className="text-lg mr-2 text-white">{t("theme")}</h1>
          <ThemeSwitch />
          <LanguageChanger />
        </div>
        <LogInForm /> */}
        <section className="flex ">
          <div>
            {/* <h1 className="text-lg mr-2 text-white">{t("theme")}</h1> */}
            <ThemeSwitch />
            <LanguageChanger />
            <div>
              <Image
                src={gif}
                alt="girl is shopping"
                width={800}
                height={800}
                unoptimized
                className="rounded-3xl"
              />
            </div>
          </div>
          <div>
            <LogInForm />
          </div>
        </section>
      </main>
    </TranslationsProvider>
  );
}
