import defaultBlogImage from "../assets/images/defaultBlogImage.webp";

function BlogCard({ blog: { title, description, publicationDate } }) {
  return (
    <>
      <img src={defaultBlogImage} alt="blogImg" className="rounded-t-xl" />
      <div className="p-6 min-h-64 flex flex-col items-stretch justify-between">
        <h2 className="font-bold mb-3 text-xl">{title}</h2>
        <p className="text-gray-800">{description}</p>
        <div className="flex justify-between mt-6">
          <span className="text-gray-400">{publicationDate}</span>
          <button className="text-teal-700 hover:text-teal-500">
            Read More...
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
