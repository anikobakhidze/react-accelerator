import productList from "../utils/productsList";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <ul className="grid grid-cols-3 h-screen  gap-y-6">
      {productList.map((product) => (
        <li
          key={product.id}
          className="mx-auto shadow-md shadow-[#1c5858] rounded-xl"
        >
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
