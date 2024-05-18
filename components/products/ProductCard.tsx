import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";

async function ProductCard({ product, addCart }: IProductCardContainer) {
  const { id, title, description, price, thumbnail } = product;
  return (
    <div className="rounded-xl w-[300px] flex flex-col items-between h-full">
      <Link href={`/products/${id}`}>
        <div className="w-[300px] h-[150px] relative">
          <Image
            src={thumbnail}
            alt={title}
            className="rounded-t-[12px] mb-2"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
        <h3 className="font-bold text-center text-[#3f3b35] dark:text-white">
          {title}
        </h3>
        <p className="px-8 text-justify text-[#57544c] mt-5 h-[120px] dark:text-white">
          {description}
        </p>
        <p className="px-8 text-medium-green font-bold my-3 dark:text-white">
          {price} USD
        </p>
      </Link>
      <div className="mt-auto">
        <AddToCartBtn product={product} addCart={addCart} />
      </div>
    </div>
  );
}

export default ProductCard;
