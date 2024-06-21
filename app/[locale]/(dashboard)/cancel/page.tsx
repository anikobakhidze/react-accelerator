import Image from "next/image";
import decline from "../../../../public/images/decline.svg";
import { getI18n } from "@/locales/server";
import Link from "next/link";
export default async function CancelPage() {
  const t = await getI18n();
  return (
    <div className="flex justify-center items-center flex-1 flex-col p-4">
      <Image
        src={decline}
        width={200}
        height={200}
        alt="decline"
        className="animate-fadeUpIn"
      />
      <h3 className="text-xl font-bold mt-4 md:text-3xl ">
        {t("canceledPage.paymentCanceled")}
      </h3>
      <p className="text-lg mt-2 md:text-xl lg:text-2xl">
        {t("canceledPage.sorry")}
      </p>
      <Link
        href="/cart"
        className="bg-btn-primary-color px-5 py-3 rounded-full hover:opacity-70 transition-all duration-300 text-white hover:shadow-lg mt-6"
      >
        {t("canceledPage.tryAgain")}
      </Link>
    </div>
  );
}
