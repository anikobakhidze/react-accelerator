import { PacmanLoader } from "react-spinners";

export default function ProductsLoading() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center h-[100vh]   mt-56 mb-32 px-3">
      <PacmanLoader color="#8d94b4" />
      <p className="text-btn-primary-color font-bold mt-6  text-xs md:text-lg">
        Just a moment, we&apos;re preparing the web page. This may take a few
        seconds...
      </p>
    </div>
  );
}
