import { useI18n } from "@/locales/client";
import React from "react";
import { FaSortAmountDown, FaSortAmountUpAlt } from "react-icons/fa";

function Sort({ onClick, sortOrderAsc }: IClick) {
  const t = useI18n();
  return (
    <div className="flex gap-8 max-w-7xl justify-end mx-auto px-5 xl:px-0">
      <button
        onClick={onClick}
        className="ml-4 text-sm bg-btn-primary-color flex justify-center items-center text-white py-1 px-4 rounded-md hover:bg-opacity-75 transition duration-300"
      >
        <span className="mr-2">
          {sortOrderAsc ? <FaSortAmountDown /> : <FaSortAmountUpAlt />}
        </span>
        {t("sort")}
      </button>
    </div>
  );
}

export default Sort;
