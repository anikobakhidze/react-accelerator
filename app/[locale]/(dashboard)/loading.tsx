import { PacmanLoader } from "react-spinners";

export default function DashboardLoading() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center   dark:bg-black mt-56 ">
      <PacmanLoader color="#8d94b4" />
      <p className="text-btn-primary-color font-bold mt-6  text-xs md:text-lg">
        Just a moment, we&apos;re preparing the web page. This may take a few
        seconds...
      </p>
    </div>
  );
}
