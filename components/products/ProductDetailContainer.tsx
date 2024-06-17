import ShareOnSocial from "../sharedComponents/UI/ShareOnSocial";
import BackButton from "../sharedComponents/UI/BackBtn";
import AddToCart from "./AddToCart";
import Heading from "../sharedComponents/UI/Heading";
import ProductImage from "./ProductImage";

function ProductDetailContainer({ product }: { product: IProductDetails }) {
  return (
    <section className="flex flex-1 flex-col justify-center items-center bg-light-bg-color w-full py-10 dark:bg-black dark:bg-opacity-50">
      <div className="w-11/12 max-w-5xl mx-auto mt-24 md:mt-32 lg:mt-36">
        <Heading heading={product.title} />
        <div className="flex flex-col md:flex-row gap-10 md:justify-center md:items-center">
          <div className="w-full lg:w-1/2 h-auto relative ">
            <ProductImage image={product.image} title={product.title} />
            <div className="absolute inset-0 bg-black bg-opacity-50 dark:block hidden"></div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-btn-primary-color">
              Title
            </h4>
            <p className="font-semibold text-md dark:text-white">
              {product.title}
            </p>
            <h4 className="text-lg font-semibold text-btn-primary-color md:hidden">
              Description
            </h4>
            <p className="font-semibold text-md dark:text-white md:hidden">
              {product.description}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <i className="fas fa-tag mr-2"></i>${product.price}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <i className="fas fa-layer-group mr-2"></i>
                {product.category}
              </span>
            </div>
            <div className="mt-4">
              <ShareOnSocial product={product} />
            </div>
            <div className="flex gap-4 mt-4">
              <BackButton />
              <AddToCart product={product} />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h4 className="text-lg font-semibold text-btn-primary-color hidden md:block">
            Description
          </h4>
          <p className="font-semibold text-md dark:text-white hidden md:block">
            {product.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailContainer;
