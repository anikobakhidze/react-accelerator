import { ThemeProvider } from "next-themes";
export function Providers({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
