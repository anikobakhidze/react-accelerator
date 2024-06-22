import defaultProductImage from "../../public/images/defaultProductImage.webp";
import Image from "next/image";
const ProductImage = ({ image, title }: { image: string; title: string }) => {
  return (
    <>
      {image ? (
        <Image
          src={image}
          alt={title}
          width={200}
          height={250}
          className="w-[200px] h-[250px] object-cover rounded-t-lg"
        />
      ) : (
        <Image
          src={defaultProductImage}
          alt="Default Blog"
          width={200}
          height={250}
          className="w-[200px] h-[250px] object-cover rounded-t-lg"
        />
      )}
    </>
  );
};

export default ProductImage;
