import BlogSection from "./BlogSection";
import Category from "./Category";
import CoverSection from "./CoverSection";
import ProductSection from "./ProductSection";
import Services from "./Services";
function HomePage() {
  return (
    <section className="mt-24 ">
      <CoverSection />
      <Services />
      <Category />
      <ProductSection />
      <BlogSection />
    </section>
  );
}

export default HomePage;
