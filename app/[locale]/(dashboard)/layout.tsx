import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

export const metadata = {
  title: "Store",
  description: "homework",
};
export default async function DashboardLayout({ children }: IChildrenProps) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
