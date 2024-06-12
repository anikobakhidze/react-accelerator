import Image from "next/image";
import cover from "@/public/images/coverPicture.webp";
import { getSession } from "@auth0/nextjs-auth0";
import { getI18n } from "@/locales/server";
async function CoverSection() {
  const session = await getSession();
  const user = session?.user;
  const t = await getI18n();
  return (
    <section className="relative">
      <div className="relative e w-full h-96 lg:h-[600px] xl:h-[800px] 2xl:h-[1000px]">
        <Image src={cover} layout="fill" objectFit="cover" alt="ceramics" />
      </div>
      <div className="animate-fadeInUp absolute inset-0  dark:bg-gray-900 dark:bg-opacity-70 flex flex-col justify-center items-center">
        <h1 className=" text-base sm:text-2xl md:text-4xl lg:text-6xl text-black dark:text-white font-bold mb-1 md:mb-4">
          <span className="block w-92 md:mb-2 lg:mb-4">
            {t("coverHeading.hOne")}
          </span>
          <span className="block w-92 md:mb-2 lg:mb-4">
            {t("coverHeading.hTwo")}
          </span>
          <span className="block w-92"> {t("coverHeading.hThree")}</span>
        </h1>
        <div className="flex justify-around gap-2">
          <a
            href={user ? "/products" : "/api/auth/login"}
            className="relative bg-btn-primary-color p-1 text-xs sm:p-2 md:text-base md:py-2 md:px-4 text-white overflow-hidden group hover:text-btn-primary-color"
          >
            <span className="relative z-10 text-white"> {t("shop")}</span>
            <span className="absolute left-0 bottom-0 w-full h-full bg-black  transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CoverSection;
