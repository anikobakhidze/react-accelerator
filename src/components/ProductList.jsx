import productList from "../utils/productsList";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <ul className="grid grid-cols-4 h-screen gap-8">
      {productList.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
