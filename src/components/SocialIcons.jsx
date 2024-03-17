import { LiaFacebook } from "react-icons/lia";
import { CiTwitter, CiYoutube } from "react-icons/ci";
function SocialIcons() {
  return (
    <div className="flex pt-4 gap-2.5">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <LiaFacebook className="w-8 h-8 cursor-pointer hover:scale-125 hover:opacity-90 transition-all duration-300" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <CiTwitter className="w-8 h-8 cursor-pointer hover:scale-125 hover:opacity-90 transition-all duration-300" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
        <CiYoutube className="w-8 h-8 cursor-pointer hover:scale-125 hover:opacity-90 transition-all duration-300" />
      </a>
    </div>
  );
}

export default SocialIcons;
