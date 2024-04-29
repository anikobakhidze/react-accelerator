export default async function getBlogs() {
  const url = "https://dummyjson.com/posts";
  try {
    const response = await fetch(url);
    if (response.ok) {
      const blogs = await response.json();
      return blogs.posts;
    }
    const errorMessage = `Failed to fetch blogs. Status: ${response.status}`;
    return [null, errorMessage];
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return [null, errorMessage];
  }
}
