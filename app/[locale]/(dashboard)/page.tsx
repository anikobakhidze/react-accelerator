import { getProducts } from "@/api";
import HomePageContainer from "../../../components/home/HomePageContainer";
// import getProducts from "../../../api/products/getProducts";
export default async function Home() {
  const products = await getProducts();

  return <HomePageContainer products={products} />;
}
