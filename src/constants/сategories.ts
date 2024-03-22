import { Category } from "types/Category";

import { ROUTES } from "./routes";

export const CATEGOTIES: Category[] = [
  {
    id: 'services-id',
    img: './img/categories/services.svg',
    title: 'Services',
    href: ROUTES.HOME,
  },
  {
    id: 'real-estate-id',
    img: './img/categories/real-estate.svg',
    title: 'Real Estate',
    href: ROUTES.HOME,
  },
  {
    id: 'for-rent-id',
    img: './img/categories/for-rent.svg',
    title: 'For Rent',
    href: ROUTES.HOME,
  },
  {
    id: 'items-for-sale-id',
    img: './img/categories/items-for-sale.svg',
    title: 'Items For Sale',
    href: ROUTES.HOME,
  },
  {
    id: 'restaurants-id',
    img: './img/categories/restaurants.svg',
    title: 'Restaurants',
    href: ROUTES.HOME,
  },
  {
    id: 'jobs-id',
    img: './img/categories/jobs.svg',
    title: 'Jobs',
    href: ROUTES.HOME,
  },
  {
    id: 'events-id',
    img: './img/categories/events.svg',
    title: 'Events',
    href: ROUTES.HOME,
  },

];
