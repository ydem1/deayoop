import { ROUTES } from "constants/routes";

export const USER_PAGES = [
  {
    id: 0,
    icon: 'fa-solid fa-bag-shopping',
    title: 'Order',
    url: ROUTES.userOrder,
  },
  {
    id: 1,
    icon: 'fa-regular fa-heart',
    title: 'Favourite',
    url: ROUTES.userFavourite,
  },
  {
    id: 2,
    icon: 'fa-regular fa-life-ring',
    title: 'Help',
    url: ROUTES.userHelp,
  },
  {
    id: 3,
    icon: 'fa-solid fa-gear',
    title: 'Profile',
    url: ROUTES.userProfile,
  },
];
