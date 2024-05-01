"use client";

import ProductCard from "./ProductCard";
// import { useTranslation } from "react-i18next";
import { useI18n } from "../../locales/client";

function ProductList({ products }: IProductsContainer) {
  const t = useI18n();
  return (
    <>
      <h2 className="text-xl font-bold mb-12 ">{t("heading")}</h2>
      <ul className="grid grid-cols-3 h-screen  gap-y-8 cursor-pointer">
        {products.map((product) => (
          <li
            key={product.id}
            className="mx-auto shadow-md shadow-[#1c5858] rounded-xl max-h-[410px]"
          >
            <ProductCard product={product} addCart={t("addToCart")} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
