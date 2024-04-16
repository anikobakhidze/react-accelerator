export default async function getProductDetails(productId) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    if (response.ok) {
      const product = await response.json();
      return product;
    }
    const errorMessage = `Failed to fetch products. Status: ${response.status}`;
    throw new Error(errorMessage);
  } catch (error) {
    return error.message;
  }
}
