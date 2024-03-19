import React from "react";
import { Link } from "react-router-dom";

interface Props {
  href: string;
  icon?: string;
  styleWrapper?: string;
  styleLabel: string;
  label: string;
}

export const HeaderLink: React.FC<Props> = ({
  href,
  icon,
  styleWrapper = "",
  styleLabel,
  label,
}) => {
  return (
    <Link
      className={styleWrapper}
      to={href}
    >
      {icon && <i className={icon} />}
      <p className={styleLabel}>
        {label}
      </p>
    </Link>
  )
};
