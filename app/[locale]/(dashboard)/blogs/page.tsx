import { getBlogsAction } from "@/actions";
import BlogsListContainer from "../../../../components/blog/BlogsListContainer";
export default async function Blogs() {
  const blogs = await getBlogsAction();
  return <BlogsListContainer blogs={blogs} />;
}
