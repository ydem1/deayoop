import React from "react";
import { FooterLink } from "types/FooterLink";

import { LinkItem } from "../LinkItem";

interface Props {
  links: FooterLink[]
}

export const ListMenu: React.FC<Props> = ({ links }) => (
  <ul className="flex gap-3">
    {links.map(({ label, href }) => (
      <li key={`${label}: ${href}`}>
        <LinkItem label={label} href={href} />
      </li>
    ))}
  </ul>
);
