import footerLogo from "../assets/images/footerLogo.png";
import { VscArrowCircleRight } from "react-icons/vsc";
import { LiaFacebook } from "react-icons/lia";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import Logo from "./Logo";
function Footer() {
  return (
    <footer className="flex place-items-center justify-around bg-[#1c5858] text-white pb-6">
      <div>
        <Logo logo={footerLogo} />
        <nav>
          <ul>
            <li>
              <a
                href="/"
                className="transition-colors duration-300 hover:text-gray-300"
              >
                Terms & Conditions
              </a>
            </li>
            <li className="my-2">
              <a
                href="/"
                className="transition-colors duration-300 hover:text-gray-300"
              >
                Privacy & Policy
              </a>
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
        <div className="flex pt-4 gap-2.5">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <LiaFacebook className="w-8 h-8 cursor-pointer hover:scale-125 transition-all duration-300" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <CiTwitter className="w-8 h-8 cursor-pointer hover:scale-125 transition-all duration-300" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <CiYoutube className="w-8 h-8 cursor-pointer hover:scale-125 transition-all duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
