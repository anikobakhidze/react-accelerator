import footerLogo from "../public/footerLogo.png";
import { VscArrowCircleRight } from "react-icons/vsc";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <footer className="flex place-items-center justify-around bg-[#1c5858] text-white pb-6 ">
      <div>
        <Link href="/">
          <Image src={footerLogo} alt="logo" width={150} height={100} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-gray-300"
              >
                Terms & Conditions
              </Link>
            </li>
            <li className="my-2">
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-gray-300"
              >
                Privacy & Policy
              </Link>
            </li>
            <li className="my-2">
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <p>&copy; 2024</p>
      </div>
      <div>
        <form className="relative flex flex-col">
          <label htmlFor="subscription">Get Newsletter Updates</label>
          <input
            id="subscription"
            className="p-2 pr-8 rounded-lg outline-none text-gray-900 mt-2"
            type="email"
            placeholder="Subscribe"
          />
          <VscArrowCircleRight className=" absolute w-6 h-6 bottom-2 right-1.5 text-gray-800 cursor-pointer transition-all hover:text-[#53b1b1] hover:scale-125" />
        </form>
        <SocialIcons />
      </div>
    </footer>
  );
}

export default Footer;
