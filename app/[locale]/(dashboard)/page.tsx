import HomePageContainer from "../../../components/HomePageContainer";

// import { useState } from "react";
// import ProductList from "../../../components/ProductList";
// import SearchBar from "../../../components/SearchBar";
import getProducts from "../../../api/getProducts";

export default async function Home() {
  const products = await getProducts();

  return <HomePageContainer products={products} />;
}
