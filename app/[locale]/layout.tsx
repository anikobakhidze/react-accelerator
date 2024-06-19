import "./globals.css";
import { Providers } from "./providers";
import { I18nProviderClient } from "../../locales/client";
import { ReactNode } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import { getI18n } from "@/locales/server";

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: t("mainTitle"),
    description: t("mainDescription"),
  };
}

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <I18nProviderClient locale={locale}>
            <UserProvider>{children}</UserProvider>
          </I18nProviderClient>
        </Providers>
      </body>
    </html>
  );
}
