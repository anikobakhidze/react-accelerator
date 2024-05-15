import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

export const metadata = {
  title: "Store",
  description: "homework",
};
export default async function DashboardLayout({ children }: IChildrenProps) {
  return (
    <main className="flex flex-col justify-between min-h-screen dark:bg-slate-800">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
