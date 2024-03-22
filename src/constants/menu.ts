import { ROUTES } from "./routes";

export const MENU_OPTIONS = [
  {
    title: 'Services',
    img: './img/categories/services.svg',
    subcategories: [
      {
        title: 'Accounting & Finance',
        href: ROUTES.HOME
      },
      {
        title: 'Admin / Office',
        subcategories: [
          {
            title: 'Admin',
            href: ROUTES.HOME,
          },
          {
            title: 'Office',
            href: ROUTES.HOME,
          }
        ]
      },
      {
        title: 'Arch / Engineering',
        subcategories: [
          {
            title: 'Arch',
            href: ROUTES.HOME,
          },
          {
            title: 'Engineering',
            href: ROUTES.HOME,
          },
        ]
      },
      {
        title: 'Art / Media / Design',
        subcategories: [
          {
            title: 'Art',
            href: ROUTES.HOME,
          },
          {
            title: 'Media',
            href: ROUTES.HOME,
          },
          {
            title: 'Design',
            href: ROUTES.HOME,
          },
        ]
      },
      {
        title: 'Biotech / Science',
        subcategories: [
          {
            title: 'Biotech',
            href: ROUTES.HOME,
          },
          {
            title: 'Science',
            href: ROUTES.HOME,
          },
        ]
      },
    ]
  },
  {
    title: 'Real Estate',
    img: './img/categories/real-estate.svg',
    subcategories: [
      {
        title: 'Houses',
        href: ROUTES.HOME
      },
      {
        title: 'Apartments',
        href: ROUTES.HOME
      }
    ]
  },
  {
    title: 'For Rent',
    img: './img/categories/for-rent.svg',
    subcategories: [
      {
        title: 'Apartments',
        href: ROUTES.HOME
      },
      {
        title: 'Houses',
        href: ROUTES.HOME
      },
      {
        title: 'Rooms',
        href: ROUTES.HOME
      }
    ]
  },
  {
    title: 'Items For Sale',
    img: './img/categories/items-for-sale.svg',
    subcategories: [
      {
        title: 'Electronics',
        href: ROUTES.HOME
      },
      {
        title: 'Furniture',
        href: ROUTES.HOME
      },
      {
        title: 'Clothing',
        href: ROUTES.HOME
      }
    ]
  },
  {
    title: 'Jobs',
    img: './img/categories/restaurants.svg',
    subcategories: [
      {
        title: 'IT',
        href: ROUTES.HOME
      },
      {
        title: 'Finance',
        href: ROUTES.HOME
      },
      {
        title: 'Education',
        href: ROUTES.HOME
      }
    ]
  },
];