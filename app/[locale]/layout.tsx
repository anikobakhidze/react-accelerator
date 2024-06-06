import "./globals.css";
import { Providers } from "./providers";
import { I18nProviderClient } from "../../locales/client";
import { ReactNode } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
export const metadata = {
  title: " Store",
  description: "homework",
};

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
