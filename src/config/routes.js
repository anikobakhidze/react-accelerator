import routesData from "../constants/routesData";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import UserProfile from "../pages/UserProfile";
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
];
export default routes;
