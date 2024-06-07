import { getCartItems } from "@/api";
import { getSession } from "@auth0/nextjs-auth0";
import ShoppingItem from "./ShoppingItem";

async function ShoppingCart() {
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;

  if (!userId) {
    return (
      <div>
        <p>User is not authenticated</p>
      </div>
    );
  }

  try {
    const products = await getCartItems(userId);

    return (
      <div>
        <p>Shopping Cart</p>
        {products.length === 0 ? (
          <div>No Products in cart</div>
        ) : (
          <div>
            {products.map((item: ICartProduct) => (
              <ShoppingItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div>
        <p>Failed to fetch cart items</p>
      </div>
    );
  }
}

export default ShoppingCart;
