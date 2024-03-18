import React from "react";
import { Link } from "react-router-dom";
import { CategoryMenu } from "types/CategoryMenu";
import { ItemCategory } from "./ItemCategory";

interface Props {
  onClick?: (category: CategoryMenu, title: string) => void,
  category: CategoryMenu,
  img?: string,
  isActive?: boolean,
  closeMenu?: () => void,
}

export const LinkCategory: React.FC<Props> = ({
  onClick,
  category,
  img,
  isActive,
  closeMenu,
}) => {
  const handleOnclick = () => {
    if (onClick) {
      onClick(category, category.title)
    }
  };

  return (
    category.url ? (
      <Link to={category.url} onClick={closeMenu}>
        <ItemCategory title={category.title} img={img} isActive={isActive} />
      </Link>
    ) : (
      <button className='w-full' onClick={handleOnclick}>
        <ItemCategory title={category.title} img={img} isActive={isActive} />
      </button>
    )
  );
};
