import Category from "./Category";
import CoverSection from "./CoverSection";
import Services from "./Services";
function HomePage() {
  return (
    <main className="mt-24 ">
      <CoverSection />
      <Services />
      <Category />
    </main>
  );
}

export default HomePage;
