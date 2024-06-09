// "use client";
// import React, { useEffect, useState } from "react";
import EditBlogForm from "@/components/blog/EditBlogForm";
import { getBlogAction } from "@/actions";

async function EditBlogPage({ params: { id } }: { params: { id: number } }) {
  const blogDetails = await getBlogAction(id);
  console.log(blogDetails);
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

  return <EditBlogForm blogDetails={blogDetails} />;
}

export default EditBlogPage;
