"use server";
import LogInForm from "@/components/logIn/LogInForm";
import ThemeSwitch from "@/components/sharedComponents/UI/ThemeSwitch";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../../components/sharedComponents/Language/TranslationProvides";
import LanguageChanger from "@/components/sharedComponents/Language/LanguageChanger";
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
      <main className="w-full h-[100vh] flex flex-col items-center justify-around bg-medium-green dark:bg-slate-800 ">
        <div className="flex items-center ">
          <h1 className="text-lg mr-2 text-white">{t("theme")}</h1>
          <ThemeSwitch />
          <LanguageChanger />
        </div>
        <LogInForm />
      </main>
    </TranslationsProvider>
  );
}
