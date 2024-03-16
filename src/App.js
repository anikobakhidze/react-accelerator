import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductsContainer from "./components/ProductsContainer.jsx";
import SearchBar from "./components/SearchBar.jsx";
function App() {
  return (
    <main className="flex flex-col max-h-screen bg-gray-100 ">
      <Header />
      <SearchBar />
      <ProductsContainer />
      <Footer />
    </main>
  );
}

export default App;
