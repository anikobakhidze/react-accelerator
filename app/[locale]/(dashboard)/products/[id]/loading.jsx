export default function ProductCardLoading() {
  return (
    <section className="flex flex-1 flex-col justify-center bg-gray-100 w-full dark:bg-slate-800">
      <h2 className=" bg-gray-300 rounded animate-pulse w-4/5 h-10 mx-auto text-3xl font-bold mb-10 "></h2>
      <div className="w-4/5 mx-auto h-10 bg-gray-300 rounded animate-pulse mb-10 mt-10"></div>
      <div className="flex gap-10 w-4/5 mx-auto">
        <div className="relative w-[500px] h-[500px] bg-gray-300 rounded animate-pulse"></div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-y-4">
            <div className="h-8 w-24 bg-gray-300 rounded animate-pulse mr-10"></div>
            <div className="h-6 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-y-4">
            <div className="h-8 w-24 bg-gray-300 rounded animate-pulse mr-10"></div>
            <div className="h-6 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-y-4">
            <div className="h-8 w-24 bg-gray-300 rounded animate-pulse mr-10"></div>
            <div className="h-6 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-y-4">
            <div className="h-8 w-24 bg-gray-300 rounded animate-pulse mr-10"></div>
            <div className="h-6 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
