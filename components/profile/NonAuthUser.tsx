"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { AiOutlineUser } from "react-icons/ai";

function NonAuthUser({ onOpenModal }: { onOpenModal: () => void }) {
  const { user } = useUser();
  return (
    <button
      className={`rounded-[50%] w-6 h-6 md:w-8 md:h-8 flex justify-center items-center bg-btn-primary-color transition-all hover:opacity-75 hover:scale-105 ${
        !user ? "xl:hidden" : ""
      }`}
      onClick={onOpenModal}
    >
      <AiOutlineUser className="w-4 h-4 md:w-5 md:h-5 text-white" />
    </button>
  );
}

export default NonAuthUser;
