import Image from "next/image";
import ShareOnSocial from "../sharedComponents/UI/ShareOnSocial";
import BackButton from "../sharedComponents/UI/BackBtn";
import AddToCart from "./AddToCart";
import Heading from "../sharedComponents/UI/Heading";

function ProductDetailContainer({ product }: { product: IProductDetails }) {
  return (
    <section className="flex flex-1 flex-col justify-center items-center bg-light-bg-color dark:bg-black dark:bg-opacity-50 w-full py-10">
      <h2 className="mt-24 md:mt-32 lg:mt-32 w-4/5 mx-auto  font-bold ">
        <Heading heading={product.title} />
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 w-1/2 mx-auto items-center justify-between">
        <div className="relative w-full lg:w-[400px] h-[300px] lg:h-[400px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover rounded"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 dark:block hidden"></div>
        </div>

        <div className="flex flex-col justify-center w-full lg:w-auto items-center lg:items-start">
          <div className="flex flex-col gap-y-4 mb-4 w-full">
            <div className="flex items-center gap-4 w-full">
              <h3 className="font-bold text-base lg:text-xl text-btn-primary-color w-24 lg:w-auto">
                Title
              </h3>
              <p className="font-semibold text-sm lg:text-base text-center lg:text-left">
                {product.title}
              </p>
            </div>
            <div className=" items-center gap-4 w-full flex md:hidden">
              <h3 className="font-bold text-base lg:text-xl text-btn-primary-color w-24 lg:w-auto">
                Description
              </h3>
              <p className="font-semibold  text-sm lg:text-base text-center lg:text-left">
                {product.description}
              </p>
            </div>
            <div className="flex items-center gap-4 w-full">
              <h3 className="font-bold text-base lg:text-xl text-btn-primary-color w-24 lg:w-auto">
                Price
              </h3>
              <p className="font-semibold  text-sm lg:text-base text-center lg:text-left">
                ${product.price}
              </p>
            </div>
            <div className="flex items-center gap-4 w-full">
              <h3 className="font-bold text-base lg:text-xl text-btn-primary-color w-24 lg:w-auto">
                Category
              </h3>
              <p className="font-semibold  text-sm lg:text-base text-center lg:text-left">
                {product.category}
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex flex-col lg:flex-row gap-4 w-full items-start">
              <ShareOnSocial product={product} />
            </div>
            <div className="w-full flex gap-4 items-start mt-4">
              <BackButton />
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden flex-col gap-5 w-1/2 mx-auto items-start md:flex my-10">
        <h3 className="font-bold text-base lg:text-xl text-btn-primary-color w-24 lg:w-auto">
          Description
        </h3>
        <p className="font-semibold  text-sm lg:text-base text-center lg:text-left">
          {product.description}
        </p>
      </div>
    </section>
  );
}

export default ProductDetailContainer;
