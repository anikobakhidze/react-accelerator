import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "../../constants";
// import { redirect } from "next/navigation";
import TranslationsProvider from "@/components/TranslationProvides";
import initTranslations from "@/app/i18n";
export const metadata = {
  title: "Store",
  description: "homework",
};
export default async function DashboardLayout({
  children,
  params: { locale },
}: IDashboardProps) {
  // const cookieStore = cookies();
  // const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  // if (!cookie) redirect("/login")
  const i18nNamespaces = ["common"];
  const { resources } = await initTranslations(
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
      <main className="flex flex-col justify-between min-h-screen dark:bg-slate-800">
        <Header />
        {children}
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
