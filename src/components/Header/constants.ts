import { ROUTES } from 'constants/routes';

export const HEADER_LINKS = {
  MENU: 'All Categories',
  USER_FAVOURITE: 'Favourite',
  USER_LOG: 'Log in',
  USER_SIGN: 'Sign Up',
};

export const USER_LINKS = [
  {
    href: ROUTES.home,
    icon: 'fa-regular fa-heart',
    wrapperClassName: 'flex gap-3',
    labelClassName: 'font-semibold',
    label: HEADER_LINKS.USER_FAVOURITE,
  },
  {
    href: ROUTES.user,
    labelClassName: 'font-bold',
    label: HEADER_LINKS.USER_LOG,
  },
  {
    href: ROUTES.user,
    wrapperClassName: 'bg-darkBlue rounded-lg py-2 px-4',
    labelClassName: 'text-white font-bold',
    label: HEADER_LINKS.USER_SIGN,
  },
]