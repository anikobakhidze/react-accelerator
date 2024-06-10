import EditProductForm from "@/components/products/EditProductForm";
import { getProductAction } from "@/actions";

async function EditProductPage({ params: { id } }: { params: { id: number } }) {
  const productDetails = await getProductAction(id);

  return <EditProductForm productDetails={productDetails} />;
}

export default EditProductPage;
