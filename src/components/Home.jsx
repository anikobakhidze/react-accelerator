import ProductList from "./ProductList";
function Home() {
  return (
    <section className="overflow-auto w-4/5 mx-auto ">
      <h2>Products</h2>
      <ProductList />
    </section>
  );
}

export default Home;
