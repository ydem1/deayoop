import React from "react";
import { Link } from "react-router-dom";
import { CategoryMenu } from "types/CategoryMenu";
import { Category } from "./Category";

interface Props {
  onClick?: (category: CategoryMenu, title: string) => void,
  category: CategoryMenu,
  img?: string,
  isActive?: boolean,
  closeMenu?: () => void,
}

export const CategoryLink: React.FC<Props> = ({
  onClick,
  category,
  img,
  isActive,
  closeMenu,
}) => {
  const { url = '', title } = category;
  const handleOnclick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (closeMenu && url !== '') {
      closeMenu();
    } else if (onClick) {
      event.preventDefault();
      onClick(category, category.title)
    }
  };

  return (
    <Link to={url} onClick={handleOnclick}>
      <Category title={title} img={img} isActive={isActive} />
    </Link>
  );
};
