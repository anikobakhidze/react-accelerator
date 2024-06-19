import { getBlogsAction } from "@/actions";
import BlogsPageContainer from "../../../../components/blog/BlogsPageContainer";
export default async function Blogs() {
  const blogs = await getBlogsAction();
  return <BlogsPageContainer blogs={blogs} />;
}
