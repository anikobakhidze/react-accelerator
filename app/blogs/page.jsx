import getBlogs from "../../api/getBlogs";
import BlogsListContainer from "../../components/BlogsListContainer";
export default async function Blogs() {
  const blogs = await getBlogs();
  return <BlogsListContainer blogs={blogs} />;
}
