import { ROUTES } from "./routes";

export const MENU_OPTIONS = [
  {
    title: 'Services',
    img: './img/categories/services.svg',
    subcategories: [
      {
        title: 'Accounting & Finance',
        href: ROUTES.home
      },
      {
        title: 'Admin / Office',
        subcategories: [
          {
            title: 'Admin',
            href: ROUTES.home,
          },
          {
            title: 'Office',
            href: ROUTES.home,
          }
        ]
      },
      {
        title: 'Arch / Engineering',
        subcategories: [
          {
            title: 'Arch',
            href: ROUTES.home,
          },
          {
            title: 'Engineering',
            href: ROUTES.home,
          },
        ]
      },
      {
        title: 'Art / Media / Design',
        subcategories: [
          {
            title: 'Art',
            href: ROUTES.home,
          },
          {
            title: 'Media',
            href: ROUTES.home,
          },
          {
            title: 'Design',
            href: ROUTES.home,
          },
        ]
      },
      {
        title: 'Biotech / Science',
        subcategories: [
          {
            title: 'Biotech',
            href: ROUTES.home,
          },
          {
            title: 'Science',
            href: ROUTES.home,
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
        href: ROUTES.home
      },
      {
        title: 'Apartments',
        href: ROUTES.home
      }
    ]
  },
  {
    title: 'For Rent',
    img: './img/categories/for-rent.svg',
    subcategories: [
      {
        title: 'Apartments',
        href: ROUTES.home
      },
      {
        title: 'Houses',
        href: ROUTES.home
      },
      {
        title: 'Rooms',
        href: ROUTES.home
      }
    ]
  },
  {
    title: 'Items For Sale',
    img: './img/categories/items-for-sale.svg',
    subcategories: [
      {
        title: 'Electronics',
        href: ROUTES.home
      },
      {
        title: 'Furniture',
        href: ROUTES.home
      },
      {
        title: 'Clothing',
        href: ROUTES.home
      }
    ]
  },
  {
    title: 'Jobs',
    img: './img/categories/restaurants.svg',
    subcategories: [
      {
        title: 'IT',
        href: ROUTES.home
      },
      {
        title: 'Finance',
        href: ROUTES.home
      },
      {
        title: 'Education',
        href: ROUTES.home
      }
    ]
  },
];