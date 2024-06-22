import logo from "../../public/images/logo.avif";
import HeaderNavigationList from "./HeaderNavigationList";
import Link from "next/link";
import Image from "next/image";
import AddToCartBtn from "../cart/AddToCartBtn";
import { getSession } from "@auth0/nextjs-auth0";
import SettingsPanel from "./SettingsPanel";
import AuthButtons from "../profile/AuthBottons";
import BurgerMenu from "./BurgerMenu";
import AddProductsBtn from "../products/AddProductsBtn";
import AddBlogBtn from "../blog/AddBlogBtn";
import { hasUserRole } from "@/utils/userRole";
import { getUser } from "@/api";
async function Header() {
  const session = await getSession();
  const user = session?.user;
  const userInfo = await getUser();
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 dark:bg-black">
      <SettingsPanel />
      <div className="flex justify-between items-center h-14 p-2 space-x-2 lg:px-14  md:px-10 px-6 lg:h-20">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={175}
            height={35}
            className="w-28 h-6 sm:w-32 sm:h-8 md:w-36  lg:w-44 lg:h-[36px]   "
          />
        </Link>
        <HeaderNavigationList />
        <div className="flex items-center space-x-4"></div>
        <div className="flex items-center space-x-2 md:space-x-4 w-92">
          {hasUserRole(user) && user.role[0] === "admin" && (
            <div className="xl:hidden">
              <AddBlogBtn />
            </div>
          )}
          <div className="xl:hidden">{user && <AddProductsBtn />}</div>
          {user && <AddToCartBtn />}
          <BurgerMenu user={user} />
          <AuthButtons user={userInfo} />
        </div>
      </div>
    </header>
  );
}

export default Header;
