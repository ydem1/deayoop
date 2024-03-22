
export interface CategoryMenu {
  title: string;
  img?: string;
  href?: string;
  subcategories?: CategoryMenu[]; 
}