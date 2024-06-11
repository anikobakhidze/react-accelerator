import logo from "../../public/images/logo.avif";
// import ProfilePageButton from "../profile/ProfilePageButton";
import HeaderNavigationList from "./HeaderNavigationList";
import Link from "next/link";
import Image from "next/image";
import AddToCartBtn from "../cart/AddToCartBtn";
import { getSession } from "@auth0/nextjs-auth0";
import SettingsPanel from "./SettingsPanel";
import AuthButtons from "../profile/AuthBottons";
import BurgerMenu from "./BurgerMenu";

async function Header() {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 dark:bg-dark-bg-primary">
      <SettingsPanel />
      <div className="flex justify-between items-center h-16 p-2 space-x-2 lg:px-14  md:px-10 px-6 md:h-24">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={175}
            height={35}
            className="w-28 h-6 sm:w-32 sm:h-10 md:w-44 md:h-[36px]   "
          />
        </Link>
        <HeaderNavigationList />
        <div className="flex items-center space-x-4">
          {/* {user && <ProfilePageButton />} */}
        </div>
        <div className="flex items-center space-x-2 md:space-x-4 w-92">
          {user && <AddToCartBtn />}
          <BurgerMenu user={user} />
          <AuthButtons user={user} />
        </div>
      </div>
    </header>
  );
}

export default Header;
