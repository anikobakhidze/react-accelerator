import Image from "next/image";
// import defaultBlogImage from "../../../public/defaultBlogImage.webp";
import defaultBlogImage from "../../../../../public/defaultBlogImage.webp";
import getBlogDetails from "../../../../../api/getBlogDetails";
import getBlogs from "@/api/getBlogs";
export async function generateStaticParams() {
  const blogs = await getBlogs();
  const paths = blogs.map((blog) => ({
    id: `${blog.id}`,
  }));

  return paths;
}

export default async function BlogsDetailPage({ params: { id } }) {
  const blog = await getBlogDetails(id);
  return (
    <section className="flex flex-1 flex-col  justify-center bg-light-green w-full py-10 dark:bg-slate-800">
      <h2 className="text-dark-green w-4/5 mx-auto text-3xl font-bold mb-10 first-letter:capitalize my-10 dark:text-slate-100">
        {blog.title}
      </h2>

      <div className="flex flex-col gap-10 w-4/5  mx-auto">
        <div className="w-[500px] h-[500px] relative">
          <Image
            src={defaultBlogImage}
            alt="blog"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
        <p className="font-semibold text-md dark:text-white">{blog.body}</p>
      </div>
    </section>
  );
}
