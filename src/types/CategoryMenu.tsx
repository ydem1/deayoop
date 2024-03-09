
export interface CategoryMenu {
  title: string;
  img?: string;
  url?: string;
  subcategories?: CategoryMenu[]; 
}