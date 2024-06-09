import Image from "next/image";
import { getProductAction } from "@/actions";
import ShareOnFacebook from "@/components/sharedComponents/UI/ShareOnFacebook";

export default async function ProductDetailPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const product = await getProductAction(id);
  return (
    <section className="flex flex-1 flex-col justify-center bg-light-green w-full dark:bg-slate-800">
      <h2 className="text-dark-green w-4/5 mx-auto text-3xl font-bold mb-10 first-letter:capitalize mt-10">
        {product.category}
      </h2>
      <div className="flex gap-10 w-4/5 mx-auto">
        <div className="relative w-[500px] h-[500px]">
          <Image
            src={product.image}
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
              Category
            </h3>
            <p className="font-semibold text-md">{product.category}</p>
            <ShareOnFacebook />
          </div>
        </div>
      </div>
    </section>
  );
}
