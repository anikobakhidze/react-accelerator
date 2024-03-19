import React from "react";
import ProductList from "../components/ProductList";
function Home() {
  return (
    <section className="overflow-auto w-4/5 mx-auto py-10 ">
      <h2 className="text-xl font-bold mb-12 ">
        Innovate Your Life with the iPhone Series
      </h2>
      <ProductList />
    </section>
  );
}

export default Home;
