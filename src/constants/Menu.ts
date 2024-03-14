import { ROUTES } from "./routes";

export const MENU_OPTIONS = [
  {
    title: 'Services',
    img: './img/categories/services.svg',
    subcategories: [
      {
        title: 'Accounting & Finance',
        url: ROUTES.home
      },
      {
        title: 'Admin / Office',
        subcategories: [
          {
            title: 'Admin',
            url: ROUTES.home,
          },
          {
            title: 'Office',
            url: ROUTES.home,
          }
        ]
      },
      {
        title: 'Arch / Engineering',
        subcategories: [
          {
            title: 'Arch',
            url: ROUTES.home,
          },
          {
            title: 'Engineering',
            url: ROUTES.home,
          },
        ]
      },
      {
        title: 'Art / Media / Design',
        subcategories: [
          {
            title: 'Art',
            url: ROUTES.home,
          },
          {
            title: 'Media',
            url: ROUTES.home,
          },
          {
            title: 'Design',
            url: ROUTES.home,
          },
        ]
      },
      {
        title: 'Biotech / Science',
        subcategories: [
          {
            title: 'Biotech',
            url: ROUTES.home,
          },
          {
            title: 'Science',
            url: ROUTES.home,
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
        url: ROUTES.home
      },
      {
        title: 'Apartments',
        url: ROUTES.home
      }
    ]
  },
  {
    title: 'For Rent',
    img: './img/categories/for-rent.svg',
    subcategories: [
      {
        title: 'Apartments',
        url: ROUTES.home
      },
      {
        title: 'Houses',
        url: ROUTES.home
      },
      {
        title: 'Rooms',
        url: ROUTES.home
      }
    ]
  },
  {
    title: 'Items For Sale',
    img: './img/categories/items-for-sale.svg',
    subcategories: [
      {
        title: 'Electronics',
        url: ROUTES.home
      },
      {
        title: 'Furniture',
        url: ROUTES.home
      },
      {
        title: 'Clothing',
        url: ROUTES.home
      }
    ]
  },
  {
    title: 'Jobs',
    img: './img/categories/restaurants.svg',
    subcategories: [
      {
        title: 'IT',
        url: ROUTES.home
      },
      {
        title: 'Finance',
        url: ROUTES.home
      },
      {
        title: 'Education',
        url: ROUTES.home
      }
    ]
  },
];