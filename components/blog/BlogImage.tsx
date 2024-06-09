import defaultBlogImage from "../../public/images/defaultBlogImage.webp";
import Image from "next/image";
const BlogImage = ({ image, title }: { image: string; title: string }) => {
  return (
    <>
      {image ? (
        <Image
          src={image}
          alt={title}
          className="rounded-t-xl"
          width={600}
          height={400}
        />
      ) : (
        <Image
          src={defaultBlogImage}
          alt="Default Blog"
          className="rounded-t-xl"
          width={600}
          height={400}
        />
      )}
    </>
  );
};

export default BlogImage;
