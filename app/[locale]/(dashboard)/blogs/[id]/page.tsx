import { getBlogAction } from "@/actions";
import BlogImage from "@/components/blog/BlogImage";

export default async function BlogsDetailPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const blog = await getBlogAction(id);
  console.log(blog, "blog page");

  return (
    <section className="flex flex-1 flex-col  justify-center bg-light-green w-full py-10 dark:bg-slate-800">
      <h2 className="text-dark-green w-4/5 mx-auto text-3xl font-bold mb-10 first-letter:capitalize my-10 dark:text-slate-100">
        {blog.title}
      </h2>

      <div className="flex flex-col gap-10 w-4/5  mx-auto">
        <div className="w-[500px] h-[500px] relative">
          <BlogImage image={blog.image} title={blog.title} />
        </div>
        <p className="font-semibold text-md dark:text-white">
          {blog.description}
        </p>
        <p className="font-semibold text-md dark:text-white">{blog.category}</p>
      </div>
    </section>
  );
}
