"use server";
import LogInForm from "@/components/LogInForm";
// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "../../constants";
// import { redirect } from "next/navigation";
import { login } from "../actions";
import ThemeSwitch from "@/components/ThemeSwitch";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../../components/TranslationProvides";
import LanguageChanger from "@/components/LanguageChanger";
export default async function LogIn({ params: { locale } }) {
  // const cookieStore = cookies();
  // const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  // if (cookie) {
  //   redirect("/");
  // }
  const i18nNamespaces = ["common"];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const handleLogIn = async (username, password) => {
    "use server";
    await login(username, password);
  };

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
          <LanguageChanger className="ml-10" />
        </div>

        <LogInForm handleLogIn={handleLogIn} />
      </main>
    </TranslationsProvider>
  );
}
