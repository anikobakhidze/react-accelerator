import defaultImage from "../assets/images/defaultImage.jpg";
function ProductCard({ product: { title, description, img = defaultImage } }) {
  return (
    <div className=" rounded-xl w-[300px] flex flex-col items-between h-full">
      <img src={img} alt={title} className="rounded-t-[12px] mb-2" />
      <h3 className="font-bold text-center text-[#3f3b35]">{title}</h3>
      <p className="px-8 text-justify text-[#57544c] my-5">{description}</p>
      <button className="bg-[#53b1b1] w-full rounded-b-[12px] py-2 text-slate-200 mt-auto transition-all duration-300 hover:bg-[#357070]">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
