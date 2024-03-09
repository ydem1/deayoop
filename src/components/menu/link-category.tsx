import { useNavigate } from "react-router-dom";
import { CategoryMenu } from "../../types/CategoryMenu";
import React from "react";
import classNames from "classnames";

interface Props {
  onClick?: (category: CategoryMenu, title: string) => void,
  category: CategoryMenu,
  img?: string,
  isActive?: boolean,
}

export const LinkCategory: React.FC<Props> = ({
  onClick,
  category,
  img,
  isActive,
}) => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    if (category.url) {
      navigate(category.url);
      console.log(category.url);
    } else if (onClick) {
      onClick(category, category.title)
    }
  }

  return (
    <button className="w-full" onClick={handleOnclick}>
      <div className={classNames(
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
