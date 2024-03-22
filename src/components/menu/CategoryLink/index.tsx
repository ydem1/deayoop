import cn from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { CategoryMenu } from "types/CategoryMenu";

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
  const { href = '', title } = category;
  const handleOnclick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (closeMenu && href !== '') {
      closeMenu();
    } else if (onClick) {
      event.preventDefault();
      onClick(category, category.title)
    }
  };

  return (
    <Link to={href} onClick={handleOnclick}>
      <div className={cn(
        'flex items-center justify-between py-2 px-4 ',
        { 'bg-blue': isActive },
      )}>
        <div className="flex items-center gap-4">
          {img && <img className="size-5" src={img} alt={title} />}

          <p className="text-black text-sm">{title}</p>
        </div>

        <i className="fa-solid fa-chevron-right" />
      </div>
    </Link>
  );
};
