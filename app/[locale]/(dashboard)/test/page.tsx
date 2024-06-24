import { getUserCart } from "@/api";
import { getSession } from "@auth0/nextjs-auth0";

async function Page() {
  const session = await getSession();
  const userId = session?.user.sub;
  const products = await getUserCart(userId);
  console.log(products);

  return (
    <div className="mt-52">
      {products.products.map((product: any) => (
        <div key={product.id}>{product.id}</div>
      ))}
    </div>
  );
}

export default Page;
