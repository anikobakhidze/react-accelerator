import logo from "../../public/images/logo.avif";
import Link from "next/link";
import Image from "next/image";
import { getI18n } from "../../locales/server";

async function Footer() {
  const t = await getI18n();
  return (
    <footer className="bg-light-bg-color dark:bg-black dark:bg-opacity-50 py-6">
      <div className="w-full justify-around flex flex-col sm:flex-row items-center ">
        <div className="mb-4 sm:mb-0">
          <Link href="/">
            <Image src={logo} alt="logo" width={120} height={80} />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center ">
          <nav>
            <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 xl:gap-8">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-300 hover:text-btn-primary-color"
                >
                  {t("terms")}
                </Link>
              </li>
              <li className="my-2 sm:my-0">
                <Link
                  href="/"
                  className="transition-colors duration-300 hover:text-btn-primary-color"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li className="my-2 sm:my-0">
                <Link
                  href="/contact"
                  className="transition-colors duration-300 hover:text-btn-primary-color"
                >
                  {t("contactPage.contact")}
                </Link>
              </li>
            </ul>
          </nav>
          <p className="mt-4 sm:mt-0 sm:ml-8">&copy; 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
