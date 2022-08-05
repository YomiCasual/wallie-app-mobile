import { APP_ROUTES } from "./../../navigation/routes";
import { icons } from "../../constants";

export const FEATURES_LIST = [
  {
    id: "top-up",
    icon: icons.reload,
    title: "Top Up",
    bgColor: "#F2EFFF",
    iconColor: "#6A3BED",
  },
  {
    id: "transfer",
    icon: icons.send,
    title: "Transfer",
    bgColor: "#FFF9EB",
    iconColor: "#FFC75D",
  },
  {
    id: "internet",
    icon: icons.internet,
    title: "Internet",
    bgColor: "#E7FFF1",
    iconColor: "#54CF85",
  },
  {
    id: "wallet",
    icon: icons.wallet,
    title: "Wallet",
    bgColor: "#FFF1EF",
    iconColor: "#FF4133",
  },
  {
    id: "bill",
    icon: icons.bill,
    title: "Bill",
    bgColor: "#FFF9EB",
    iconColor: "#FFC75D",
  },
  {
    id: "games",
    icon: icons.game,
    title: "Games",
    bgColor: "#E7FFF1",
    iconColor: "#54CF85",
  },
  {
    id: "mobile-prepaid",
    icon: icons.phone,
    title: "Mobile prepaid",
    bgColor: "#FFF1EF",
    iconColor: "#FF4133",
  },
  {
    id: "more",
    icon: icons.more,
    title: "More",
    bgColor: "#F2EFFF",
    iconColor: "#6A3BED",
  },
];

export const BOTTOM_BAR_LIST = [
  {
    id: APP_ROUTES.HOME,
    icon: icons.more,
    active: true,
  },
  {
    id: APP_ROUTES.SCAN,
    icon: icons.scan,
  },
  {
    id: "user",
    icon: icons.user,
  },
];
