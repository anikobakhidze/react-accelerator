import { getCartItems } from "@/api";
import { getSession } from "@auth0/nextjs-auth0";
import ShoppingItem from "./ShoppingItem";
import Heading from "../sharedComponents/UI/Heading";
import { getI18n } from "@/locales/server";
import BackButton from "../sharedComponents/UI/BackBtn";
import ResetCart from "./ResetCart";
import Link from "next/link";

const ShoppingCart = async () => {
  const t = await getI18n();

  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;

  if (!userId) {
    return (
      <div className="mt-32 md:mt-44 flex justify-center flex-1 items-center flex-col">
        <p className="text-sm md:text-lg lg:text-xl font-semibold mb-10 md:mt-0">
          {t("cartPage.notAuthenticated")}
        </p>
        <BackButton />
      </div>
    );
  }

  try {
    const products = await getCartItems(userId);
    const productPrice = products.map(
      (product: ICartProduct) =>
        Number(product.price) * Number(product.selectedQuantity)
    );
    const total = productPrice.reduce(
      (price: number, sum: number) => price + sum,
      0
    );

    return (
      <section className="flex flex-1 flex-col pt-28 mt:pt-32 lg:pt-44 pb-10 bg-light-bg-color dark:bg-black">
        <Heading heading={t("cartPage.title")} />
        {products.length > 0 && (
          <div className="text-center mt-8 flex items-center md:justify-end md:pr-10 justify-center pr-0">
            <BackButton />
            <ResetCart heading={t("cartPage.reset")} userId={userId} />
          </div>
        )}
        {products.length === 0 ? (
          <div className="font-bold md:text-lg text-base text-center">
            <h4 className="mb-5">{t("cartPage.emptyCart")}</h4>
            <BackButton />
          </div>
        ) : (
          <div className="md:pl-28">
            {products.map((item: ICartProduct) => (
              <ShoppingItem key={item.id} item={item} />
            ))}
            <div className="flex flex-col md:justify-end my-10 lg:ml-20 justify-center md:pr-10 pr-0">
              <div className="flex flex-col md:flex-row items-center md:justify-end">
                <h4 className="text-btn-primary-color font-bold text-base md:text-xl lg:text-2xl mr-0 md:mr-20">
                  {t("cartPage.totalPrice")}
                </h4>
                <p className="text-sm md:text-lg lg:text-xl font-semibold mt-2 md:mt-0">
                  {total}$
                </p>
              </div>
              <div className="mt-4 md:mt-2 flex justify-center md:justify-end">
                <Link
                  href="/checkout"
                  className="bg-black dark:bg-white dark:text-black dark:hover:opacity-70 text-white font-bold py-2 px-4 hover:bg-opacity-70 transition duration-300"
                >
                  {t("cartPage.checkout")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  } catch (error) {
    return (
      <div className="mt-32 md:mt-44 mb-10">
        <p className="font-bold md:text-lg text-base text-center">
          {t("cartPage.fetchError")}
        </p>
      </div>
    );
  }
};

export default ShoppingCart;
