import { Category } from "types/Category";
import { ROUTES } from "./routes";

export const CATEGOTIES: Category[] = [
  {
    id: 'services-id',
    img: './img/categories/services.svg',
    title: 'Services',
    url: ROUTES.home,
  },
  {
    id: 'real-estate-id',
    img: './img/categories/real-estate.svg',
    title: 'Real Estate',
    url: ROUTES.home,
  },
  {
    id: 'for-rent-id',
    img: './img/categories/for-rent.svg',
    title: 'For Rent',
    url: ROUTES.home,
  },
  {
    id: 'items-for-sale-id',
    img: './img/categories/items-for-sale.svg',
    title: 'Items For Sale',
    url: ROUTES.home,
  },
  {
    id: 'restaurants-id',
    img: './img/categories/restaurants.svg',
    title: 'Restaurants',
    url: ROUTES.home,
  },
  {
    id: 'jobs-id',
    img: './img/categories/jobs.svg',
    title: 'Jobs',
    url: ROUTES.home,
  },
  {
    id: 'events-id',
    img: './img/categories/events.svg',
    title: 'Events',
    url: ROUTES.home,
  },

];
