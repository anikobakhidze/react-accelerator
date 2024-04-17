import "./globals.css";

export const metadata = {
  title: "Iphone Store",
  description: "homework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
