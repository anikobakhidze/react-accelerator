import EditBlogForm from "@/components/blog/EditBlogForm";
import { getBlogAction } from "@/actions";

async function EditBlogPage({ params: { id } }: { params: { id: number } }) {
  const blogDetails = await getBlogAction(id);

  return <EditBlogForm blogDetails={blogDetails} />;
}

export default EditBlogPage;
