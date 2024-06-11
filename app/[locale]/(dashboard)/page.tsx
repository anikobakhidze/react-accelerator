import { getProductsAction } from "@/actions";

import HomePage from "../../../components/home/HomePage";

export default async function Home() {
  const products = await getProductsAction();

  return <HomePage />;
}
