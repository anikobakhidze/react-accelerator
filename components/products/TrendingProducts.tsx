"use client";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/pagination";

function TrendingProducts({ products }: IProductsContainer) {
  const firstFourProducts = products.slice(0, 4);

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
      {firstFourProducts.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default TrendingProducts;
