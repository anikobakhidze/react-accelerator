// "use client";
import { ThemeProvider } from "next-themes";
export function Providers({ children }: IChildrenProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
