import defaultBlogImage from "../../public/images/defaultBlogImage.webp";
import Image from "next/image";
const ProductImage = ({ image, title }: { image: string; title: string }) => {
  return (
    <>
      {image ? (
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          style={{ height: "350px", objectFit: "cover" }}
        />
      ) : (
        <Image
          src={defaultBlogImage}
          alt="Default Blog"
          width={600}
          height={400}
          style={{ height: "350px", objectFit: "cover" }}
        />
      )}
    </>
  );
};

export default ProductImage;
