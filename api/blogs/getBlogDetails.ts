export default async function getBlogDetails(id: number) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (response.ok) {
      const blog = await response.json();
      return blog;
    }
    const errorMessage = `Failed to fetch blogs. status: ${response.status}`;
    return [null, errorMessage];
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return [null, errorMessage];
  }
}
