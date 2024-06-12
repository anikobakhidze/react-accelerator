import Image from "next/image";
import shopService from "../../public/images/shopService.png";
import savingService from "../../public/images/savingService.png";
import headphoneService from "../../public/images/headphoneService.png";
import walletService from "../../public/images/walletService.png";
import { getI18n } from "@/locales/server";
async function Services() {
  const t = await getI18n();
  return (
    <div className="flex justify-center  w-full py-8 md:py-20">
      <div className="flex flex-col items-center justify-center border-r-2 border-gray-200 px-10 md:px-14 group">
        <div className="dark:w-20 dark:h-20 dark:bg-white dark:rounded-full flex justify-center items-center">
          <Image
            src={shopService}
            height={50}
            width={50}
            alt="shop"
            className=" dark:rounded-3xl transition-transform duration-300 group-hover:animate-bounce"
          />
        </div>
        <h3 className="text-sm xl:text-base font-bold my-2 lg:my-3 hover:text-btn-primary-color cursor-pointer duration-300 transition-all  ">
          {t("service.h1")}
        </h3>
        <p className="text-xs lg:text-sm xl:text-base text-gray-500">
          {t("service.p1")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center border-r-2 border-gray-200  px-10 md:px-14 group">
        <div className="dark:w-20 dark:h-20 dark:bg-white dark:rounded-full flex justify-center items-center">
          <Image
            src={savingService}
            height={50}
            width={50}
            alt="shop"
            className=" dark:rounded-3xl transition-transform duration-300 group-hover:animate-bounce"
          />
        </div>
        <h3 className="text-sm xl:text-base font-bold my-2 lg:my-3 hover:text-btn-primary-color cursor-pointer duration-300 transition-all ">
          {t("service.h2")}
        </h3>
        <p className="text-xs lg:text-sm xl:text-base text-gray-500">
          {t("service.p2")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center border-r-2 border-gray-200  px-10 md:px-14 group">
        <div className="dark:w-20 dark:h-20 dark:bg-white dark:rounded-full flex justify-center items-center">
          <Image
            src={headphoneService}
            height={50}
            width={50}
            alt="shop"
            className=" dark:rounded-3xl transition-transform duration-300 group-hover:animate-bounce"
          />
        </div>
        <h3 className="text-sm xl:text-base font-bold my-2 lg:my-3 hover:text-btn-primary-color cursor-pointer duration-300 transition-all  ">
          {t("service.h3")}
        </h3>
        <p className="text-xs lg:text-sm xl:text-base text-gray-500">
          {t("service.p3")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center border-r-2 border-gray-200 px-10 md:px-14 xl:px-10 group">
        <div className="dark:w-20 dark:h-20 dark:bg-white dark:rounded-full flex justify-center items-center">
          <Image
            src={walletService}
            height={50}
            width={50}
            alt="shop"
            className=" dark:rounded-3xl transition-transform duration-300 group-hover:animate-bounce"
          />
        </div>
        <h3 className="text-sm xl:text-base font-bold my-2 lg:my-3 hover:text-btn-primary-color cursor-pointer duration-300 transition-all  ">
          {t("service.h4")}
        </h3>
        <p className="text-xs lg:text-sm xl:text-base text-gray-500">
          {t("service.p4")}
        </p>
      </div>
    </div>
  );
}

export default Services;
