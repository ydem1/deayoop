import { ROUTES } from 'constants/routes';

export const USER_PAGES = [
  {
    id: 0,
    icon: 'fa-solid fa-bag-shopping',
    title: 'Order',
    href: ROUTES.USER_ORDER,
  },
  {
    id: 1,
    icon: 'fa-regular fa-heart',
    title: 'Favourite',
    href: ROUTES.USER_FAVOURITE,
  },
  {
    id: 2,
    icon: 'fa-regular fa-life-ring',
    title: 'Help',
    href: ROUTES.USER_HELP,
  },
  {
    id: 3,
    icon: 'fa-solid fa-gear',
    title: 'Profile',
    href: ROUTES.USER_PROFILE,
  },
];
