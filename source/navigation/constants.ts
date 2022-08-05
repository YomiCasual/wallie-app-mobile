import { icons } from "../constants";
import { Home, Scan, Signup, User } from "../screens";
import { APP_ROUTES } from "./routes";

export const AUTH_SCREEN_LIST = [
  {
    name: APP_ROUTES.SIGNUP,
    component: Signup,
  },
];

export const TAB_SCREENS = [
  {
    name: APP_ROUTES.HOME,
    component: Home,
    icon: icons.more,
  },
  {
    name: APP_ROUTES.SCAN,
    component: Scan,
    icon: icons.scan,
  },
  {
    name: APP_ROUTES.USER,
    icon: icons.user,
    component: User,
  },
];
