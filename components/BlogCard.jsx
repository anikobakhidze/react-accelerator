import defaultBlogImage from "../public/defaultBlogImage.webp";
import Image from "next/image";
import BlogsCardReadMoreBtn from "./BlogCardReadMoreBtn";
function BlogCard({ blog: { id, title, body, publicationDate = "10.01.24" } }) {
  return (
    <>
      <Image src={defaultBlogImage} alt="blogImg" className="rounded-t-xl" />
      <div className="p-6 min-h-64 flex flex-col  justify-between">
        <h2 className="font-bold mb-3 text-xl">{title}</h2>
        <p className="text-gray-800 max-h-28 overflow-hidden dark:text-white">
          {body}
        </p>
        <div className="flex justify-between mt-6">
          <span className="text-gray-400">{publicationDate}</span>
          <BlogsCardReadMoreBtn id={id} />
        </div>
      </div>
    </>
  );
}

export default BlogCard;
