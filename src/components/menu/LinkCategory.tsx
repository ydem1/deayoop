import React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryMenu } from "types/CategoryMenu";
import cn from "classnames";

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
  const navigate = useNavigate();

  const handleOnclick = () => {
    if (category.url && closeMenu) {
      navigate(category.url);
      closeMenu();
    } else if (onClick) { 
      onClick(category, category.title)
    }
  }

  return (
    <button className="w-full" onClick={handleOnclick}>
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
    </button>
  );
};
