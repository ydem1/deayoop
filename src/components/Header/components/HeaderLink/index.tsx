import React from "react";
import { Link } from "react-router-dom";

interface Props {
  url: string;
  icon?: string;
  styleWrapper?: string;
  styleLabel: string;
  label: string;
}

export const HeaderLink: React.FC<Props> = ({
  url,
  icon,
  styleWrapper = "",
  styleLabel,
  label,
}) => {
  return (
    <Link
      className={styleWrapper}
      to={url}
    >
      {icon && <i className={icon} />}
      <p className={styleLabel}>
        {label}
      </p>
    </Link>
  )
};
