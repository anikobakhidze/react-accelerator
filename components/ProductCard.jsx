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
    <div className=" rounded-xl w-[300px] flex flex-col items-between h-full">
      <div onClick={handleClick}>
        <div className="w-[300px] h-[150px] relative object-cover">
          <Image
            src={thumbnail}
            alt={title}
            className=" rounded-t-[12px] mb-2"
            fill
          />
        </div>
        <h3 className="font-bold text-center text-[#3f3b35]">{title}</h3>
        <p className="px-8 text-justify text-[#57544c] mt-5 h-[120px]">
          {description}
        </p>
        <p className="px-8 text-medium-green font-bold my-3">{price} USD</p>
      </div>
      <button className="bg-[#53b1b1] w-full rounded-b-[12px] py-2 text-slate-200 mt-auto transition-all duration-300 hover:bg-[#357070]">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
