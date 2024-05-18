import Image from "next/image";
import getProductDetails from "../../../../../api/products/getProductDetails";
import { setStaticParamsLocale } from "next-international/server";

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/products");
  const products = await response.json();
  const paths = products.products.map((product: IProduct) => ({
    id: `${product.id}`,
  }));
  return paths;
}

export default async function ProductDetailPage({
  params: { id, locale },
}: {
  params: { id: number; locale: string };
}) {
  setStaticParamsLocale(locale);

  const product = await getProductDetails(id);
  return (
    <section className="flex flex-1 flex-col  justify-center bg-light-green w-full dark:bg-slate-800">
      <h2 className="text-dark-green w-4/5 mx-auto text-3xl font-bold mb-10 first-letter:capitalize mt-10">
        {product.category}
      </h2>
      <div className="flex gap-10 w-4/5  mx-auto">
        <div className="relative w-[500px] h-[500px]">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-y-4">
            <h3 className="font-bold text-xl mr-10 text-dark-green w-24">
              Title
            </h3>
            <p className="font-semibold text-md ">{product.title}</p>
          </div>
          <div className="flex items-center gap-y-4">
            <h3 className="font-bold text-xl mr-10 text-dark-green w-24">
              Description
            </h3>
            <p className="font-semibold text-md">{product.description}</p>
          </div>
          <div className="flex items-center gap-y-4">
            <h3 className="font-bold text-xl mr-10 text-dark-green w-24">
              Price
            </h3>
            <p className="font-semibold text-md">{product.price}</p>
          </div>
          <div className="flex items-center gap-y-4">
            <h3 className="font-bold text-xl mr-10 text-dark-green w-24">
              Rating
            </h3>
            <p className="font-semibold text-md">{product.rating}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
