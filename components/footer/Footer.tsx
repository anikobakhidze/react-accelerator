// "use client";
import footerLogo from "../../public/images/footerLogo.png";
import { VscArrowCircleRight } from "react-icons/vsc";
import SocialIcons from "../sharedComponents/UI/SocialIcons";
import Link from "next/link";
import Image from "next/image";
import { getI18n } from "../../locales/server";
async function Footer() {
  const t = await getI18n();
  return (
    <footer className="flex place-items-center justify-around bg-dark-green text-white pb-6 dark:bg-slate-900 pt-10">
      <div>
        <Link href="/">
          <Image src={footerLogo} alt="logo" width={70} height={70} />
        </Link>

        <nav>
          <ul>
            <li>
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-gray-300"
              >
                {t("terms")}
              </Link>
            </li>
            <li className="my-2">
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-gray-300"
              >
                {t("privacy")}
              </Link>
            </li>
            <li className="my-2">
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-gray-300"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </nav>
        <p>&copy; 2024</p>
      </div>
      <div>
        <form className="relative flex flex-col">
          <label htmlFor="subscription"> {t("getUpdates")}</label>
          <input
            id="subscription"
            className="p-2 pr-8 rounded-lg outline-none text-gray-900 mt-2"
            type="email"
            placeholder={t("subscribe")}
          />
          <VscArrowCircleRight className=" absolute w-6 h-6 bottom-2 right-1.5 text-gray-800 cursor-pointer transition-all hover:text-[#53b1b1] hover:scale-125  dark:text-slate-300" />
        </form>
        <SocialIcons />
      </div>
    </footer>
  );
}

export default Footer;
