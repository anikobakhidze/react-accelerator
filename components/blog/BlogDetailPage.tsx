import { getI18n } from "@/locales/server";
import Heading from "../sharedComponents/UI/Heading";
import BlogImage from "./BlogImage";
import ShareOnSocial from "../sharedComponents/UI/ShareOnSocial";
import BackButton from "../sharedComponents/UI/BackBtn";

async function BlogDetailPage({ blog }: { blog: IBlog }) {
  const t = await getI18n();
  return (
    <section className="flex flex-1 flex-col justify-center items-center bg-light-bg-color w-full py-10 dark:bg-black dark:bg-opacity-50">
      <div className="w-11/12 max-w-5xl mx-auto mt-24 md:mt-32 lg:mt-36">
        <Heading heading={blog.title} />
        <div className="flex flex-col md:flex-row gap-10 md:justify-center md:items-center">
          <div className="w-full lg:w-1/2 h-auto relative ">
            <BlogImage image={blog.image} title={blog.title} />
            <div className="absolute inset-0 bg-black bg-opacity-50 dark:block hidden"></div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 ">
            <h4 className="text-lg font-semibold text-btn-primary-color">
              {t("category.title")}
            </h4>
            <p className="font-semibold text-md dark:text-white">
              {blog.category}:
            </p>
            <h4 className="text-lg font-semibold text-btn-primary-color  md:hidden ">
              {t("category.description")}
            </h4>
            <p className="font-semibold text-md dark:text-white md:hidden text-justify">
              {blog.description}
            </p>
            <div className="flex items-center gap-4 mt-4">
              {blog.created_at && (
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  {new Date(blog.created_at).toLocaleDateString()}
                </span>
              )}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <i className="fas fa-user mr-2"></i>
                {blog.userSub || "Unknown Author"}
              </span>
            </div>
            <div className=" mt-4">
              <ShareOnSocial product={blog} />
            </div>
            <BackButton />
          </div>
        </div>
        <div className="mt-5">
          <h4 className="text-lg font-semibold text-btn-primary-color hidden md:block">
            {t("category.description")}
          </h4>
          <p className="font-semibold text-md dark:text-white  text-justify hidden md:block mt-5">
            {blog.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogDetailPage;
