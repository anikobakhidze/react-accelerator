import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Subscribe from "@/components/sharedComponents/UI/Subscribe";

export const metadata = {
  title: "Store",
  description: "homework",
};
export default async function DashboardLayout({ children }: IChildrenProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col ">{children}</main>
      <Subscribe />
      <Footer />
    </div>
  );
}
