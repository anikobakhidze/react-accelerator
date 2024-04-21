import Image from "next/image";
// import defaultBlogImage from "../../../public/defaultBlogImage.webp";
import defaultBlogImage from "../../../../public/defaultBlogImage.webp";
import getBlogDetails from "../../../../api/getBlogDetails";

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const blogs = await response.json();
  const paths = blogs.posts.map((blog) => ({
    params: { id: `/blogs/${blog.id}` },
  }));

  return paths;
}

export default async function BlogsDetailPage({ params: { id } }) {
  const blog = await getBlogDetails(id);

  return (
    <section className="flex flex-1 flex-col  justify-center bg-light-green w-full py-10 dark:bg-slate-800">
      <h2 className="text-dark-green w-4/5 mx-auto text-3xl font-bold mb-10 first-letter:capitalize my-10 dark:text-slate-100">
        Blog {blog.id}
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
        <h3 className="font-bold text-xl mr-10 text-dark-green dark:text-slate-100">
          {blog.title}
        </h3>
        <p className="font-semibold text-md dark:text-white">{blog.body}</p>
      </div>
    </section>
  );
}
