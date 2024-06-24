import { getMyProductsAction } from "@/actions";
import Heading from "@/components/sharedComponents/UI/Heading";
import { getI18n } from "@/locales/server";
import ProductList from "@/components/products/ProductList";
import BackButton from "@/components/sharedComponents/UI/BackBtn";

async function MyProductsPage() {
  const myProducts = await getMyProductsAction();
  const t = await getI18n();

  return (
    <>
      {myProducts.length > 0 ? (
        <section className="mt-28 mb-10 lg:mt-40 lg:mb-14">
          <Heading heading={t("myProducts.title")} />
          <ProductList products={myProducts} />
        </section>
      ) : (
        <div className="mt-32 md:mt-44 flex justify-center flex-1 items-center flex-col">
          <p className="text-sm md:text-lg lg:text-xl font-semibold mb-10 md:mt-0">
            {t("myProducts.noProducts")}
          </p>
          <BackButton />
        </div>
      )}
    </>
  );
}

export default MyProductsPage;
