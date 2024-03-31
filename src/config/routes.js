import routesData from "../data/routesData";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import UserProfile from "../pages/UserProfile";
import Blogs from "../pages/Blogs";
const routes = [
  {
    path: routesData.HOME,
    Component: Home,
  },
  {
    path: routesData.CONTACT,
    Component: Contact,
  },
  {
    path: routesData.USERPROFILE,
    Component: UserProfile,
  },
  {
    path: routesData.BLOGS,
    Component: Blogs,
  },
];
export default routes;
