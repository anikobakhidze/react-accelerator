// import productList from "../data/productsList";
import ProductCard from "./ProductCard";

function ProductList({ sortProducts }) {
  return (
    <ul className="grid grid-cols-3 h-screen  gap-y-6">
      {sortProducts.map((product) => (
        <li
          key={product.id}
          className="mx-auto shadow-md shadow-[#1c5858] rounded-xl max-h-[410px]"
        >
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
