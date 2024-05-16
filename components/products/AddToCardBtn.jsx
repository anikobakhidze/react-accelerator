"use client";

function AddToCardBtn({ handleClick, addCart }) {
  return (
    <button
      className="bg-[#53b1b1] w-full rounded-b-[12px] py-2 text-slate-200 mt-auto transition-all duration-300 hover:bg-[#357070] dark:bg-[#357070] dark:hover:bg-[#53b1b1]"
      onClick={handleClick}
    >
      + {addCart}
    </button>
  );
}

export default AddToCardBtn;
