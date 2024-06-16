"use client";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function TrendingProducts({ products }: IProductsContainer) {
  const firstFourProducts = products.slice(0, 4);

  return (
    <div className="flex justify-between items-center py-8 md:pt-20 md:pb-12  mx-auto  md:pl-20 pl-10 md:w-4/5 w-[350px]">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          680: {
            slidesPerView: firstFourProducts.length < 2 ? 1 : 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: firstFourProducts.length < 3 ? 1 : 2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: firstFourProducts.length < 4 ? 1 : 3,
            spaceBetween: 10,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {firstFourProducts.map((product: IProduct) => (
          <SwiperSlide
            key={product.id}
            className={
              firstFourProducts.length === 1 ? "flex justify-center" : ""
            }
          >
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrendingProducts;
