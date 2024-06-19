import { getI18n } from "@/locales/server";
import { FaRegEnvelope } from "react-icons/fa";

async function Subscribe() {
  const t = await getI18n();
  return (
    <section className="w-full bg-btn-primary-color flex p-6 md:p-14 justify-around items-center flex-col lg:flex-row space-y-4 lg:space-y-0 dark:bg-black dark:bg-opacity-50">
      <div className="flex justify-center items-center text-white">
        <div className="bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center">
          <FaRegEnvelope className="text-btn-primary-color w-6 h-6 md:w-8 md:h-8" />
        </div>
        <h4 className="text-base md:text-2xl ml-2 md:ml-4 lg:ml-6">
          {t("subscribe.heading")}
        </h4>
      </div>
      <form className="flex flex-col">
        <label
          id="subscribe"
          className="hidden md:block text-gray-600 text-sm md:text-base dark:text-white md:mr-2 mb-2 md:mb-0"
        >
          {t("subscribe.label")}
        </label>
        <div className="flex items-center flex-col sm:flex-row">
          <input
            type="email"
            placeholder="email@example.com"
            className="h-8 md:h-10 w-64 md:w-80 py-2 px-3 outline-none"
          />
          <button
            type="submit"
            className="mt-2 sm:mt-0 h-8 md:h-10 w-20 md:w-32 bg-black k dark:bg-white dark:text-black text-white hover:opacity-75 transition-opacity duration-300"
          >
            {t("subscribe.btn")}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Subscribe;
