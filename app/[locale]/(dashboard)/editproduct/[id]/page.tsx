import { getProduct } from "@/api";
import React from "react";

import EditProductForm from "@/components/products/EditProductForm";
async function EditProductPage({ params: { id } }: { params: { id: number } }) {
  const productDetails = await getProduct(id);

  return <EditProductForm productDetails={productDetails} />;
}

export default EditProductPage;
