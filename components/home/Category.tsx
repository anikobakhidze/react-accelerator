"use client";
import { useI18n } from "@/locales/client";
import cat1 from "../../public/images/cat1.webp";
import cat2 from "../../public/images/cat2.webp";
import cat3 from "../../public/images/cat3.webp";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";

function Category() {
  const item1Ref = useRef<HTMLDivElement | null>(null);
  const item2Ref = useRef<HTMLDivElement | null>(null);
  const item3Ref = useRef<HTMLDivElement | null>(null);
  const t = useI18n();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === item1Ref.current) {
              entry.target.classList.add("animate-fadeRightIn");
            } else {
              entry.target.classList.add("animate-fadeLeftIn");
            }
          } else {
            entry.target.classList.remove(
              "animate-fadeLeftIn",
              "animate-fadeRightIn"
            );
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    if (item1Ref.current) observer.observe(item1Ref.current);
    if (item2Ref.current) observer.observe(item2Ref.current);
    if (item3Ref.current) observer.observe(item3Ref.current);
  }, []);

  return (
    <section className="grid grid-cols-1 overflow-hidden grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 gap-4 max-w-7xl mx-auto md:px-20 px-10">
      <div
        className="relative sm:row-span-2 group opacity-0"
        ref={item1Ref}
        style={{ position: "relative" }}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <Image
            src={cat1}
            alt="ceramics category"
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end items-end px-8 py-2 dark:bg-gray-900 dark:bg-opacity-70">
          <Link
            href="/products"
            className="text-base sm:text-xl lg:text-2xl text-black dark:text-white font-semibold mb-1 md:mb-4 hover:text-btn-primary-color dark:hover:text-btn-primary-color transition-all duration-300 cursor-pointer bg-white dark:bg-transparent px-3 py-2 xl:px-6 xl:py-4"
          >
            {t("category.bowls")}
          </Link>
        </div>
      </div>
      <div
        className="relative sm:row-2 sm:col-2 group opacity-0"
        ref={item2Ref}
        style={{ position: "relative" }}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <Image
            src={cat2}
            alt="fiber category"
            width={680}
            height={270}
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end items-end px-8 py-2 dark:bg-gray-900 dark:bg-opacity-70">
          <Link
            href="/products"
            className="text-base sm:text-xl lg:text-2xl text-black dark:text-white font-semibold mb-1 md:mb-4 hover:text-btn-primary-color dark:hover:text-btn-primary-color transition-all duration-300 cursor-pointer bg-white dark:bg-transparent px-3 py-2 xl:px-6 xl:py-4"
          >
            {t("category.mugs")}
          </Link>
        </div>
      </div>
      <div
        className="relative sm:row-2 sm:col-2 group opacity-0"
        ref={item3Ref}
        style={{ position: "relative" }}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <Image
            src={cat3}
            alt="ceramics category"
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end items-end px-8 py-2 dark:bg-gray-900 dark:bg-opacity-70">
          <Link
            href="/products"
            className="text-base sm:text-xl xl:text-2xl text-black dark:text-white font-semibold mb-1 md:mb-4 hover:text-btn-primary-color dark:hover:text-btn-primary-color transition-all duration-300 cursor-pointer bg-white dark:bg-transparent px-3 py-2 xl:px-6 xl:py-4"
          >
            {t("category.decorations")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Category;
