import { OfferCategory } from "./OfferCategory";

export interface Offer {
  id: number;
  slug: string;
  title: string;
  category: OfferCategory;
  description: string;
  path: string;
  rating: number;
  tags: never[];
}
