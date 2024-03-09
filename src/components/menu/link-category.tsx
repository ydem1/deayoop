import { useNavigate } from "react-router-dom";
import { CategoryMenu } from "../../types/CategoryMenu";
import React from "react";

interface Props {
  onClick?: (category: CategoryMenu) => void,
  category: CategoryMenu,
  img?: string,
}

export const LinkCategory: React.FC<Props> = ({
  onClick,
  category,
  img,
}) => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    if (category.url) {
      navigate(category.url);
      console.log(category.url);
    } else if (onClick) {
      onClick(category)
    }
  }

  return (
    <button className="w-full" onClick={handleOnclick}>
      <div className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-4">
          {img && <img className="size-6" src={img} alt={category.title} />}

          <p className="text-black text-sm">{category.title}</p>
        </div>

        <i className="fa-solid fa-chevron-right" />
      </div>
    </button>
  );
};
