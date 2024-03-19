import routesData from "../constants/routesData";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const routes = [
  {
    path: routesData.HOME,
    Component: Home,
  },
  {
    path: routesData.CONTACT,
    Component: Contact,
  },
];
export default routes;
