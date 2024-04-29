import getProducts from "../../../../api/products/getProducts";
import ProductList from "@/components/products/ProductList";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <section className="overflow-auto w-4/5 mx-auto py-10 ">
      <ProductList products={products} />
    </section>
  );
}
