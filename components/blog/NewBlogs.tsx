import { getBlogsAction } from "@/actions";
import BlogCard from "./BlogCard";
const NewBlogs: React.FC = async () => {
  const blogs = await getBlogsAction();
  const lastThreeBlog = blogs.slice(-3);

  return (
    <div className="flex justify-center md:space-x-4 py-8 md:py-20 mx-auto max-w-7xl flex-col md:flex-row items-center gap-3">
      {lastThreeBlog.map((blog: IBlog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default NewBlogs;
