export default async function getBlogs() {
  const url = "https://dummyjson.com/posts";
  try {
    const response = await fetch(url);
    if (response.ok) {
      const blogs = await response.json();
      return blogs.posts;
    }
    const errorMessage = `Failed to fetch blogs. status: ${response.status}`;
    throw new Error(errorMessage);
  } catch (error) {
    return error.message;
  }
}
