"use client";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function TrendingProducts({ products }: IProductsContainer) {
  const firstFourProducts = products.slice(0, 4);

  return (
    <div className="flex justify-between items-center py-8 md:pt-20 md:pb-12  mx-auto  md:pl-20 pl-10 md:w-4/5 w-[350px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          680: {
            slidesPerView: firstFourProducts.length < 2 ? 1 : 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: firstFourProducts.length < 3 ? 1 : 2,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: firstFourProducts.length < 4 ? 1 : 3,
            spaceBetween: 10,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="w-full "
      >
        {firstFourProducts.map((product: IProduct) => (
          <SwiperSlide
            key={product.id}
            className={` static ${
              firstFourProducts.length === 1 ? "flex justify-center" : ""
            }`}
          >
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrendingProducts;
