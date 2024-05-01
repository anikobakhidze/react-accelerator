"use client";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/navigation";
function ProfilePageButton() {
  const router = useRouter();

  const navigateToProfile = () => {
    router.push("/profile");
  };

  return (
    <button
      className="rounded-[50%] w-7 h-7 flex justify-center items-center bg-gray-300 transition-all hover:bg-gray-400 hover:scale-105  dark:bg-white  "
      onClick={navigateToProfile}
    >
      <AiOutlineUser className="w-5 h-5 dark:text-black" />
    </button>
  );
}

export default ProfilePageButton;
