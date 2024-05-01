"use server";
// import LogInForm from "@/components/logIn/LogInForm";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../../components/sharedComponents/Language/TranslationProvides";

import logIn from "../../../public/images/logIn.png";
import Image from "next/image";
import LogInContainer from "@/components/logIn/LogInContainer";
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
      <main className="w-full h-[100vh] flex flex-col items-center justify-around  dark:bg-slate-800 bg-light-green">
        <section className="flex max-w-6xl gap-20  rounded-2xl shadow-2xl p-10 bg-slate-100 dark:bg-slate-700">
          <LogInContainer />
          <div>
            <Image
              src={logIn}
              alt="girl is shopping"
              width={500}
              height={500}
              unoptimized
              className="rounded-3xl"
            />
          </div>
        </section>
      </main>
    </TranslationsProvider>
  );
}
