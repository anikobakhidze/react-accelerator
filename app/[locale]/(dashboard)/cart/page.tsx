import { getCartItems } from "@/api";
import ShoppingCart from "@/components/cart/ShoppingCart";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Cart() {
  try {
    const session = await getSession();

    if (!session || !session.user || !session.user.sub) {
      return <h1>user not logged in</h1>;
    }

    const userId = session.user.sub;

    const products = await getCartItems(userId);
    console.log(products);

    if (!products) {
      return <div>თქვენი კალათა ცარიელია.</div>;
    }

    return <ShoppingCart products={products} />;
  } catch (error) {
    return <div>შეცდომაა, მოგვიანებით სცადეთ.</div>;
  }
}
