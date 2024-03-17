import { Link } from "react-router-dom";
import { DEFAULT_CLASSNAME_FOOTER_LINK } from "../constants";
import React from "react";

interface Props {
  label: string;
  url: string;
}

export const LinkItem: React.FC<Props> = ({ label, url }) => (
  <Link
    className={DEFAULT_CLASSNAME_FOOTER_LINK}
    to={url}
  >
    {label}
  </Link>
);
