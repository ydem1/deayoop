import cn from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { CategoryMenu } from "types/CategoryMenu";

interface Props {
  category: CategoryMenu,
  onClick: (
    category: CategoryMenu,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void,
  img?: string,
  isActive: boolean,
}

export const Category: React.FC<Props> = ({
  onClick,
  category,
  img,
  isActive,
}) => (
  <li className="bg-white">
    <Link to={category.href ? category.href : ''} onClick={(event) => onClick(category, event)}>
      <div className={cn(
        'flex items-center justify-between py-2 px-4 ',
        { 'bg-blue': isActive },
      )}>
        <div className="flex items-center gap-4">
          {img && <img className="size-5" src={img} alt={category.title} />}

          <p className="text-black text-sm">{category.title}</p>
        </div>

        <i className="fa-solid fa-chevron-right" />
      </div>
    </Link>
  </li>
);
