import React from "react";
import { CategoryMenu } from "types/CategoryMenu";

import { Category } from "./CategoryItem";

interface Props {
  categories: CategoryMenu[];
  currentCategory?: string;
  onClick: (
    category: CategoryMenu,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void,
}

export const CategoryList: React.FC<Props> = ({
  categories,
  currentCategory,
  onClick,
}) => (
  <ul>{
    categories.map(category => (
      <Category
        key={category.title}
        isActive={category.title === currentCategory}
        category={category}
        img={category.img}
        onClick={onClick}
      />
    ))
  }</ul>
);
