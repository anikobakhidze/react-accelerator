import { getCartItems } from "@/api";
import { getSession } from "@auth0/nextjs-auth0";
import ShoppingItem from "./ShoppingItem";
import Heading from "../sharedComponents/UI/Heading";
import { getI18n } from "@/locales/server";
import BackButton from "../sharedComponents/UI/BackBtn";
import ResetCart from "./ResetCart";

async function ShoppingCart() {
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  const t = await getI18n();

  if (!userId) {
    return (
      <div className="mt-32 md:mt-44">
        <BackButton />
        <p>{t("cartPage.notAuthenticated")} </p>
      </div>
    );
  }

  try {
    const products = await getCartItems(userId);

    return (
      <section className="flex flex-1 flex-col pt-28 mt:pt-32 lg:pt-44 pb-10 bg-light-bg-color dark:bg-black">
        <Heading heading={t("cartPage.title")} />
        <div className="text-center mt-8 flex items-center md:justify-end md:pr-10 justify-center pr-0">
          <BackButton />
          {products.length > 0 && (
            <ResetCart heading={t("cartPage.reset")} userId={userId} />
          )}
        </div>
        {products.length === 0 ? (
          <div className="font-bold md:text-lg text-base text-center">
            {t("cartPage.emptyCart")}
          </div>
        ) : (
          <div className="md:pl-28">
            {products.map((item: ICartProduct) => (
              <ShoppingItem key={item.id} item={item} />
            ))}
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
}

export default ShoppingCart;
