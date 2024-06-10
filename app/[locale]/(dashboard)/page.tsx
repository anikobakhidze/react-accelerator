import { getProductsAction } from "@/actions";

import HomePageContainer from "../../../components/home/HomePageContainer";

export default async function Home() {
  const products = await getProductsAction();

  return <HomePageContainer products={products} />;
}
