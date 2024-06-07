// "use client";
// import React, { useEffect, useState } from "react";
import EditProductForm from "@/components/products/EditProductForm";
import { getProductAction } from "@/actions";

async function EditProductPage({ params: { id } }: { params: { id: number } }) {
  const productDetails = await getProductAction(id);
  // const [productDetails, setProductDetails] = useState<IProductDetails | null>(
  //   null
  // );
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProductDetails = async () => {
  //     const details = await getProductAction(id);
  //     setProductDetails(details);
  //     setLoading(false);
  //   };

  //   fetchProductDetails();
  // }, [id]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (!productDetails) {
  //   return <p>Product not found</p>;
  // }

  return <EditProductForm productDetails={productDetails} />;
}

export default EditProductPage;
