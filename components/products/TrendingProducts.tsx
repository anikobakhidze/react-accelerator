import { getProductsAction } from "@/actions";
import ProductCard from "./ProductCard";

const TrendingProducts: React.FC = async () => {
  const products = await getProductsAction();
  const lastThreeProducts = products.slice(0, 4);

  return (
    <div className="flex justify-center space-x-4 w-full py-8 md:pt-20 md:pb-12  max-w-7xl mx-auto">
      {lastThreeProducts.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default TrendingProducts;
