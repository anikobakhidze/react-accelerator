import { PacmanLoader } from "react-spinners";
export default function DashboardLoading() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-light-green h-[100vh]  dark:bg-slate-800">
      <PacmanLoader width={70} color="#1c5858" />
      <p className="text-orange-600 text-lg font-bold mt-6 ">
        Just a moment, we&apos;re preparing the web page. This may take a few
        seconds...
      </p>
    </div>
  );
}
