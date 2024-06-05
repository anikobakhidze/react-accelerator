// import { getProducts } from "@/api";
import { getProductsAction } from "@/actions";

import HomePageContainer from "../../../components/home/HomePageContainer";
// import getProducts from "../../../api/products/getProducts";
export default async function Home() {
  // const products = await getProducts();
  const products = await getProductsAction();
  console.log(products);
  return <HomePageContainer products={products} />;
}
