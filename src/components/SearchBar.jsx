import React, { useState, useEffect } from "react";

function SearchBar({ onClick, setSortProducts, productList }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const searchProduct = searchInput.split(" ").join("").toLowerCase();
      setSortProducts(
        searchProduct
          ? [...productList].filter((product) =>
              product.title
                .split(" ")
                .join("")
                .toLowerCase()
                .includes(searchProduct)
            )
          : [...productList]
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput, setSortProducts, productList]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form className="w-full flex justify-center items-center my-6 ">
      <input
        onChange={handleChange}
        type="text"
        value={searchInput}
        placeholder="Search"
        className="w-[50%] bg-slate-100 border-solid border-2 rounded-l-xl h-8 text-sm border-slate-300 focus:outline-none pl-2 border-r-0"
      />
      <button
        onClick={onClick}
        className="bg-[#1c5858] transition-all duration-500 hover:bg-[#2e8181] text-white flex justify-center items-center h-8 px-1 rounded-r-xl text-center"
      >
        Sort Products
      </button>
    </form>
  );
}

export default SearchBar;
