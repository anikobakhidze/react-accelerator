import React from "react";

function SearchBar() {
  return (
    <form className="w-full">
      <input type="text" placeholder="Search" className="w-[90%]" />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
