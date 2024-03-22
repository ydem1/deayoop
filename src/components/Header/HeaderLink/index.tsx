import cn from "classnames";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  href: string;
  icon?: string;
  wrapperClassName?: string;
  labelClassName: string;
  label: string;
}

export const HeaderLink: React.FC<Props> = ({
  href,
  icon,
  wrapperClassName = "",
  labelClassName,
  label,
}) => (
  <Link
    className={wrapperClassName}
    to={href}
  >
    {icon && <i className={icon} />}
    <p className={cn('text-black text-sm', labelClassName)}>
      {label}
    </p>
  </Link>
);
