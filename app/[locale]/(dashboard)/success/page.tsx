"use client";
import success from "../../../../public/images/success.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { emptyUserCart } from "@/actions";
import { useI18n } from "@/locales/client";

export default function Success() {
  const { user } = useUser();
  const userId = user?.sub;
  const router = useRouter();
  const t = useI18n();
  useEffect(() => {
    if (userId) {
      emptyUserCart(userId);
    }
    router.refresh();
  }, [userId, router]);

  return (
    <div className="flex justify-center items-center flex-1 flex-col pb-10 md:py-24 mt-44 md:mt-28">
      <Image
        src={success}
        width={200}
        height={200}
        alt="success"
        className="animate-fadeUpIn"
      />
      <h3 className="text-xl font-bold mt-4 md:text-3xl">
        {t("successPage.paymentSuccess")}
      </h3>
      <p className="text-lg mt-2 md:text-xl lg:text-2xl">
        {t("successPage.thankYou")}
      </p>
      <Link
        href="/"
        className="bg-btn-primary-color px-3 py-2 rounded-sm  hover:opacity-70 transition-all duration-300 text-white hover:shadow-lg mt-6"
      >
        {" "}
        {t("successPage.proceedHome")}
      </Link>
    </div>
  );
}
