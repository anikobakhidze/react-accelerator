import { getBlogsAction } from "@/actions";
// import getBlogs from "../../../../api/blogs/getBlogs";
import BlogsListContainer from "../../../../components/blog/BlogsListContainer";
export default async function Blogs() {
  const blogs = await getBlogsAction();
  return <BlogsListContainer blogs={blogs} />;
}
