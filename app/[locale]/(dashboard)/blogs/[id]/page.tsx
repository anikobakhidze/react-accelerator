import { getBlogAction } from "@/actions";
import BlogDetailPage from "@/components/blog/BlogDetailPage";

export default async function BlogsDetailPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const blog = await getBlogAction(id);

  return <BlogDetailPage blog={blog} />;
}
