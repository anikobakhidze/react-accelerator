import { LiaFacebook } from "react-icons/lia";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import Link from "next/link";
function SocialIcons() {
  return (
    <div className="flex pt-4 gap-2.5">
      <Link href="https://www.facebook.com" target="_blank">
        <LiaFacebook className="w-8 h-8 cursor-pointer hover:scale-125 hover:opacity-90 transition-all duration-300" />
      </Link>
      <Link href="https://www.twitter.com" target="_blank">
        <CiTwitter className="w-8 h-8 cursor-pointer hover:scale-125 hover:opacity-90 transition-all duration-300" />
      </Link>
      <Link href="https://www.youtube.com" target="_blank">
        <CiYoutube className="w-8 h-8 cursor-pointer hover:scale-125 hover:opacity-90 transition-all duration-300" />
      </Link>
    </div>
  );
}

export default SocialIcons;
