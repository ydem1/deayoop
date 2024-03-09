export interface Offer {
  id: number;
  slug: string;
  title: string;
  category: {
    id: number;
    slug: string;
    href: string;
    path: string;
    is_maincategory: boolean;
    is_secondarycategory: boolean;
    title: string;
    title_en: string;
  };
  description: null | string;
  path: string;
  rating: number;
  tags: never[];
}
