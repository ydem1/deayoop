import React from "react";
import { CategoryMenu } from "types/CategoryMenu";
import { CategoryLink } from "../CategoryLink";

interface Props {
  categories: CategoryMenu[];
  currentCategory?: string;
  onClick?: (category: CategoryMenu, title: string) => void,
  handleClose?: () => void,
}

export const LinksList: React.FC<Props> = ({ 
  categories, 
  currentCategory, 
  onClick,
  handleClose, 
}) => {
  return (
    <ul>{
      categories.map(category => (
        <li key={category.title} className="bg-white">
          <CategoryLink
            isActive={category.title === currentCategory}
            category={category}
            img={category.img}
            onClick={onClick}
            closeMenu={handleClose}
          />
        </li>
      ))
    }</ul>
  );
};
