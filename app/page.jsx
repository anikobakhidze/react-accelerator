// import HomePageContainer from "../components/HomePageContainer";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import getProducts from "../api/getProducts";
export default async function Home() {
  // function HomePageContainer() {
  //   const [sortProducts, setSortProducts] = useState(productList);
  //   const [sortOrderAsc, setSortOrderAsc] = useState(true);
  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     setSortOrderAsc((prevSortOrderAsc) => !prevSortOrderAsc);
  //     setSortProducts((prevProducts) =>
  //       sortOrderAsc
  //         ? [...prevProducts].sort((a, b) => a.price - b.price)
  //         : productList
  //     );
  //   };
  const products = await getProducts();

  return (
    <section className="overflow-auto w-4/5 mx-auto py-10 ">
      {/* <SearchBar
      // onClick={handleClick}
      // setSortProducts={setSortProducts}
      // productList={productList}
      /> */}
      <h2 className="text-xl font-bold mb-12 ">
        Innovate Your Life with the iPhone Series
      </h2>
      <ProductList products={products} />
    </section>
  );
}
