import React, { useState, useEffect } from "react";
import { useI18n } from "@/locales/client";

function SearchBar({ setSortProducts, products }: ISearchBarProps) {
  const [searchInput, setSearchInput] = useState("");
  const t = useI18n();

  useEffect(() => {
    const timer = setTimeout(() => {
      const searchProduct = searchInput.trim().toLowerCase();
      setSortProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchProduct)
        )
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput, setSortProducts, products]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="rounded-lg p-4">
      <form className="max-w-7xl mx-auto">
        <div className="flex items-center border-b border-btn-primary-color py-2">
          <input
            onChange={handleChange}
            type="text"
            value={searchInput}
            placeholder={t("search")}
            className="flex-grow px-2 py-1 bg-transparent text-sm outline-none placeholder-text-black dark:text-black"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
