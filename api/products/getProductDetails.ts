export default async function getProductDetails(id: number) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (response.ok) {
      const product = await response.json();
      return product;
    }
    const errorMessage = `Failed to fetch products. Status: ${response.status}`;
    return [null, errorMessage];
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return [null, errorMessage];
  }
}
