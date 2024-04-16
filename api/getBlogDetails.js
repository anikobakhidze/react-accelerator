export default async function getBlogDetails(blogsId) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${blogsId}`);
    if (response.ok) {
      const blog = await response.json();
      return blog;
    }
    const errorMessage = `Failed to fetch blogs. status: ${response.status}`;
    throw new Error(errorMessage);
  } catch (error) {
    return error;
  }
}
