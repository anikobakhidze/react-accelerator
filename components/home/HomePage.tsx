import BlogSection from "./BlogSection";
import Category from "./Category";
import CoverSection from "./CoverSection";
import ProductSection from "./ProductSection";
import Services from "./Services";
function HomePage() {
  return (
    <main className="mt-24 ">
      <CoverSection />
      <Services />
      <Category />
      <ProductSection />
      <BlogSection />
    </main>
  );
}

export default HomePage;
