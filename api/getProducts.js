const url = "https://dummyjson.com/products";
export default async function getProducts() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const products = await response.json();
      return products.products;
    }
    const errorMessage = `Failed to fetch products. Status: ${response.status}`;
    throw new Error(errorMessage);
  } catch (error) {
    return error.message;
  }
}
