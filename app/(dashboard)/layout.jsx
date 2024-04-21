import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "../../constants";
// import { redirect } from "next/navigation";

export const metadata = {
  title: "Store",
  description: "homework",
};
export default function DashboardLayout({ children }) {
  // const cookieStore = cookies();
  // const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  // if (!cookie) redirect("/login");
  return (
    <main className="flex flex-col justify-between min-h-screen dark:bg-slate-800">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
