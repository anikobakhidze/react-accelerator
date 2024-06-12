import ProductCard from "./ProductCard";

function ProductList({ products }: IProductsContainer) {
  return (
    <>
      <h2 className="text-xl font-bold mb-12 ">hrading</h2>
      <ul className="grid grid-cols-3 h-screen  gap-y-8 cursor-pointer">
        {products.map((product: IProduct) => (
          <li
            key={product.id}
            className="mx-auto shadow-md shadow-[#1c5858] rounded-xl max-h-[600px] p-2"
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
