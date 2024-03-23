import { ROUTES } from 'constants/routes';

export const HEADER_LINKS_LABELS = {
  MENU: 'All Categories',
  USER_FAVOURITE: 'Favourite',
  USER_LOGIN: 'Log in',
  USER_SIGN: 'Sign Up',
};

export const USER_LINKS = [
  {
    href: ROUTES.HOME,
    icon: 'fa-regular fa-heart',
    wrapperClassName: 'flex gap-3',
    labelClassName: 'font-semibold',
    label: HEADER_LINKS_LABELS.USER_FAVOURITE,
  },
  {
    href: ROUTES.USER,
    labelClassName: 'font-bold',
    label: HEADER_LINKS_LABELS.USER_LOGIN,
  },
  {
    href: ROUTES.USER,
    wrapperClassName: 'bg-darkBlue rounded-lg py-2 px-4',
    labelClassName: 'text-white font-bold',
    label: HEADER_LINKS_LABELS.USER_SIGN,
  },
]