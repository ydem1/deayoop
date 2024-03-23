import React from "react";
import { Link } from "react-router-dom";

interface Props {
  label: string;
  href: string;
}

export const LinkItem: React.FC<Props> = ({ label, href }) => (
  <Link
    className='text-darkBlue text-sm font-semibold flex'
    to={href}
  >
    {label}
  </Link>
);
