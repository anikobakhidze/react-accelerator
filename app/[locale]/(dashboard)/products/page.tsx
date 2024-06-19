import { getProductsAction } from "@/actions";

import ProductsPageContainer from "@/components/products/ProductsPageContainer";

export default async function ProductsPage() {
  const products = await getProductsAction();

  return <ProductsPageContainer products={products} />;
}
