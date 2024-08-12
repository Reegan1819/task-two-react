import About from "../Components/About";
import DashBoard from "../Components/DashBoard/DashBoard";
import Profile from "../Components/DashBoard/Profile";
import Setting from "../Components/DashBoard/Setting";
import Home from "../Components/Home";
import {
  ABOUT,
  DASHBOARD,
  DASHBOARD_SETTING,
  DASHBOARD_SETTING_PROFILE,
  HOME,
} from "./RouteEndpoints";

export const RouteList = [
  {
    path: HOME,
    component: Home,
  },
  {
    path: ABOUT,
    component: About,
  },
  {
    path: DASHBOARD,
    component: DashBoard,
  },
  {
    path: DASHBOARD_SETTING,
    component: Setting,
  },
  {
    path: DASHBOARD_SETTING_PROFILE,
    component: Profile,
  },
];
