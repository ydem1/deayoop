import React from "react";
import { CategoryMenu } from "types/CategoryMenu";

import { Category } from "./CategoryItem";

interface Props {
  categories: CategoryMenu[];
  currentCategory?: string;
  onClick?: (category: CategoryMenu, title: string) => void,
  handleClose?: () => void,
}

export const CategoryList: React.FC<Props> = ({
  categories,
  currentCategory,
  onClick,
  handleClose,
}) => (
  <ul>{
    categories.map(category => (
      <Category
        key={category.title}
        isActive={category.title === currentCategory}
        category={category}
        img={category.img}
        onClick={onClick}
        closeMenu={handleClose}
      />
    ))
  }</ul>
);
