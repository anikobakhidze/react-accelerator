"use client";
import { useState } from "react";
import SearchBar from "@/components/sharedComponents/UI/SearchBar";
import Heading from "../sharedComponents/UI/Heading";
import ProductList from "./ProductList";
import Sort from "../sharedComponents/UI/Sort";
import { useI18n } from "@/locales/client";
function ProductsPageContainer({ products }: IProductsContainer) {
  const [sortProducts, setSortProducts] = useState(products);
  const [sortOrderAsc, setSortOrderAsc] = useState(true);

  const handlePriceSort = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSortOrderAsc((prevSortOrderAsc) => !prevSortOrderAsc);

    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrderAsc) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setSortProducts(sortedProducts);
  };

  const t = useI18n();

  return (
    <section className="mt-28 mb-10 lg:mt-40 lg:mb-14">
      <Heading heading={t("product.product")} />
      <SearchBar products={products} setSortProducts={setSortProducts} />
      <Sort onClick={handlePriceSort} sortOrderAsc={sortOrderAsc} />
      <ProductList products={sortProducts} />
    </section>
  );
}

export default ProductsPageContainer;
