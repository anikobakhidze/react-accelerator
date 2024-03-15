import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import SearchBar from "./components/SearchBar.jsx";
function App() {
  return (
    <main className="flex flex-col max-h-screen">
      <Header />
      <SearchBar />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
