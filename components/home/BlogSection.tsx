import { getI18n } from "@/locales/server";
import Image from "next/image";
import headingBackground from "../../public/images/headingB.png";
import NewBlogs from "../blog/NewBlogs";
async function BlogSection() {
  const t = await getI18n();

  return (
    <section>
      <h3 className="text-gray-500 text-center">{t("blogSection.welcome")}</h3>
      <div className="relative flex justify-center items-center t-4">
        <div>
          <Image
            src={headingBackground}
            alt="heading background"
            width={200}
            height={120}
          />
        </div>
        <h2 className="absolute text-base lg:text-2xl font-bold">
          {t("blogSection.heading")}
        </h2>
      </div>
      <NewBlogs />
    </section>
  );
}

export default BlogSection;
