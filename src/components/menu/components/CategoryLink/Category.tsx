import React from "react";
import cn from "classnames";

interface Props {
  title: string,
  img?: string,
  isActive?: boolean,
}

export const Category: React.FC<Props> = ({ img, isActive, title }) => (
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
);
