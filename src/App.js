import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import AppRoutes from "./AppRoutes.js";
function App() {
  return (
    <main className="flex flex-col max-h-screen bg-gray-100 ">
      <Header />
      <SearchBar />
      <AppRoutes />
      <Footer />
    </main>
  );
}

export default App;
