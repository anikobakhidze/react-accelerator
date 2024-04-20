"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import defaultImage from "../public/defaultImage.jpg";
function ProductCard({
  product: { id, title, description, price, thumbnail },
}) {
  const routes = useRouter();
  const handleClick = () => {
    routes.push(`/products/${id}`);
  };
  return (
    <div className=" rounded-xl w-[300px] flex flex-col items-between h-full ">
      <div onClick={handleClick}>
        <div className="w-[300px] h-[150px] relative object-cover ">
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
      </div>
      <button className="bg-[#53b1b1] w-full rounded-b-[12px] py-2 text-slate-200 mt-auto transition-all duration-300 hover:bg-[#357070] dark:bg-[#357070] dark:hover:bg-[#53b1b1]">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
