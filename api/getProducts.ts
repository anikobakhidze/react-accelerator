const url = "https://dummyjson.com/products";
export default async function getProducts() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const products = await response.json();
      return products.products;
    }
    const errorMessage = `Failed to fetch products. Status: ${response.status}`;
    return [null, errorMessage];
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return [null, errorMessage];
  }
}
