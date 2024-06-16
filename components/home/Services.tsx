"use client";
import { useI18n } from "@/locales/client";
import shopService from "../../public/images/shopService.png";
import savingService from "../../public/images/savingService.png";
import headphoneService from "../../public/images/headphoneService.png";
import walletService from "../../public/images/walletService.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function Services() {
  const t = useI18n();
  return (
    <div className="flex justify-center max-w-7xl mx-auto py-8 md:py-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center border-r-2 border-gray-200 px-10 md:px-14 group">
            <div className="dark:w-20 dark:h-20 dark:bg-white dark:rounded-full flex justify-center items-center">
              <Image
                src={shopService}
                height={50}
                width={50}
                alt="shop"
                className="dark:rounded-3xl transition-transform duration-300 group-hover:animate-bounce"
              />
            </div>
            <h3 className="text-sm text-center xl:text-base font-bold my-2 lg:my-3 hover:text-btn-primary-color cursor-pointer duration-300 transition-all">
              {t("service.h1")}
            </h3>
            <p className="text-xs lg:text-sm xl:text-base text-gray-500 text-center">
              {t("service.p1")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center border-r-2 border-gray-200 px-10 md:px-14 group">
            <div className="dark:w-20 dark:h-20 dark:bg-white dark:rounded-full flex justify-center items-center">
              <Image
                src={savingService}
                height={50}
                width={50}
                alt="saving"
                className="dark:rounded-3xl transition-transform duration-300 group-hover:animate-bounce"
              />
            </div>
            <h3 className="text-sm text-center xl:text-base font-bold my-2 lg:my-3 hover:text-btn-primary-color cursor-pointer duration-300 transition-all">
              {t("service.h2")}
            </h3>
            <p className="text-xs lg:text-sm xl:text-base text-gray-500 text-center">
              {t("service.p2")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center border-r-2 border-gray-200 px-10 md:px-14 group">
            <div className="dark:w-20 dark:h-20 dark:bg-white dark:rounded-full flex justify-center items-center">
              <Image
                src={headphoneService}
                height={50}
                width={50}
                alt="headphone"
                className="dark:rounded-3xl transition-transform duration-300 group-hover:animate-bounce"
              />
            </div>
            <h3 className="text-sm text-center xl:text-base font-bold my-2 lg:my-3 hover:text-btn-primary-color cursor-pointer duration-300 transition-all">
              {t("service.h3")}
            </h3>
            <p className="text-xs lg:text-sm xl:text-base text-gray-500 text-center">
              {t("service.p3")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center px-10 md:px-14 group">
            <div className="dark:w-20 dark:h-20 dark:bg-white dark:rounded-full flex justify-center items-center">
              <Image
                src={walletService}
                height={50}
                width={50}
                alt="wallet"
                className="dark:rounded-3xl transition-transform duration-300 group-hover:animate-bounce"
              />
            </div>
            <h3 className="text-sm text-center xl:text-base font-bold my-2 lg:my-3 hover:text-btn-primary-color cursor-pointer duration-300 transition-all">
              {t("service.h4")}
            </h3>
            <p className="text-xs lg:text-sm xl:text-base text-gray-500 text-center">
              {t("service.p4")}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Services;
