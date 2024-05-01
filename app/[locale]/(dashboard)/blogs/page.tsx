import getBlogs from "../../../../api/blogs/getBlogs";
import BlogsListContainer from "../../../../components/blog/BlogsListContainer";
export default async function Blogs() {
  const blogs = await getBlogs();
  return <BlogsListContainer blogs={blogs} />;
}
