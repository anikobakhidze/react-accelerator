"use client";
import { useRouter } from "next/navigation";
function LogOutBtn({ handleLogOut }) {
  const router = useRouter();
  const handleClick = () => {
    handleLogOut();
    router.push("/login");
  };
  return (
    <button
      onClick={handleClick}
      className="w-24 bg-medium-green text-white rounded-3xl h-8 hover:bg-dark-green"
    >
      Log Out
    </button>
  );
}

export default LogOutBtn;
