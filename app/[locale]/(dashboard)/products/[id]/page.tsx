import { getProductAction } from "@/actions";
import ProductDetailContainer from "@/components/products/ProductDetailContainer";
export default async function ProductDetailPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const product = await getProductAction(id);
  return <ProductDetailContainer product={product} />;
}
