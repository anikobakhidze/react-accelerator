import { ImSearch } from "react-icons/im";
function SearchBar() {
  return (
    <form className="w-full flex justify-center items-center my-6 ">
      <input
        type="text"
        placeholder="Search"
        className="w-[50%] bg-slate-100 border-solid border-2 rounded-l-xl h-8 text-sm border-slate-300 focus:outline-none pl-2 border-r-0"
      />
      <button className="bg-[#1c5858] transition-all duration-500 hover:bg-[#2e8181] text-white flex justify-center items-center h-8 w-8 rounded-r-xl text-center">
        <ImSearch />
      </button>
    </form>
  );
}

export default SearchBar;
