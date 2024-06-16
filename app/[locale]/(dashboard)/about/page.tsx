import { getI18n } from "@/locales/server";
import Heading from "@/components/sharedComponents/UI/Heading";
import Services from "@/components/home/Services";
import aboutBg from "../../../../public/images/aboutBg.webp";
import Image from "next/image";
export default async function About() {
  const t = await getI18n();
  return (
    <section className="lg:pt-44 mx-auto w-full bg-light-bg-color dark:bg-black sm:px-6 flex justify-center items-center pt-36">
      <div className="max-w-7xl px-10">
        <div className="flex flex-col justify-center items-center w-full font-bold  pb-10 dark:bg-black dark:bg-opacity-50">
          <div className="relative w-full h-[200px] md:h-[300px]  lg:h-[400px] ">
            <Image
              src={aboutBg}
              fill
              style={{ objectFit: "cover" }}
              alt="ceramics"
            />
            <div className="absolute inset-0  dark:bg-gray-900 dark:bg-opacity-70 flex flex-col justify-center items-center"></div>
          </div>
          <div className="absolute flex ">
            <Heading heading={t("aboutPage.title")} />
          </div>
        </div>

        <div className="w-full ">
          <p className="mb-3 md:mb-6  md:p-4 text-justify rounded-md font-semibold italic">
            {t("aboutPage.descriptionFirst")}
          </p>
          <p className="mb-3 md:mb-6  md:p-4 text-justify   rounded-md">
            {t("aboutPage.descriptionSec")}
          </p>
        </div>
        <h4 className="font-bold text-purple-color mt-4 mb-2 md:mt-8 md:mb-4 ">
          {t("aboutPage.titleSec")}
        </h4>
        <ul className="list-disc list-outside pl:-3 mb-3 md:pl-5 md:mb-6 space-y-4 text-justify">
          <li>
            <span className="font-bold text-btn-primary-color">
              {t("aboutPage.subtitle1")}
            </span>
            {t("aboutPage.li1")}
          </li>
          <li>
            <span className="font-bold text-btn-primary-color">
              {t("aboutPage.subtitle2")}
            </span>
            {t("aboutPage.li2")}
          </li>
          <li>
            <span className="font-bold text-btn-primary-color">
              {t("aboutPage.subtitle3")}
            </span>
            {t("aboutPage.li3")}
          </li>
        </ul>
        <Services />
        <p className=" mb-3 md:mb-6 text-justify  md:p-4 rounded-md">
          {t("aboutPage.descriptionThird")}
        </p>
        <p className=" mb-3 md:mb-6  md:p-4 text-justify rounded-md font-semibold italic">
          {t("aboutPage.descriptionFourth")}
        </p>
      </div>
    </section>
  );
}
