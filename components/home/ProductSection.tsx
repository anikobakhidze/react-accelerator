import { getI18n } from "@/locales/server";
import Image from "next/image";
import headingBackground from "../../public/images/headingB.png";
import TrendingProducts from "../products/TrendingProducts";
import { getProductsAction } from "@/actions";
async function ProductSection() {
  const t = await getI18n();
  const products = await getProductsAction();
  return (
    <section className="relative mt-10 lg:mt-16">
      <h3 className="text-gray-500 text-center">{t("product.welcome")}</h3>
      <div className="relative flex justify-center items-center mt-4">
        <div>
          <Image
            src={headingBackground}
            alt="heading background"
            width={200}
            height={120}
          />
        </div>
        <h2 className="absolute text-base lg:text-2xl font-bold">
          {t("product.heading")}
        </h2>
      </div>
      <TrendingProducts products={products} />
    </section>
  );
}

export default ProductSection;
