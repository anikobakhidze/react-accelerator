export default function ProductDetailPageLoading() {
  return (
    <section className="flex flex-1 flex-col justify-center items-center bg-light-bg-color w-full py-10 dark:bg-black dark:bg-opacity-50">
      <div className="w-11/12 max-w-5xl mx-auto mt-24 md:mt-32 lg:mt-36">
        <div className="animate-pulse">
          <div className="bg-gray-300 h-10 w-4/5 mx-auto mb-10 rounded"></div>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-[400px] h-[300px] lg:h-[400px] bg-gray-300 rounded"></div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="bg-gray-300 h-6 w-1/2 mb-2 rounded"></div>
              <div className="bg-gray-300 h-4 w-1/3 mb-4 rounded"></div>
              <div className="bg-gray-300 h-4 w-2/3 mb-2 rounded"></div>
              <div className="bg-gray-300 h-4 w-1/2 mb-4 rounded"></div>
              <div className="bg-gray-300 h-4 w-full mb-4 rounded"></div>
              <div className="bg-gray-300 h-4 w-2/3 mb-4 rounded"></div>
              <div className="bg-gray-300 h-4 w-1/2 mb-4 rounded"></div>
            </div>
          </div>
          <div className="mt-5">
            <div className="bg-gray-300 h-6 w-1/2 mb-2 rounded hidden lg:block"></div>
            <div className="bg-gray-300 h-4 w-full mb-4 rounded hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
