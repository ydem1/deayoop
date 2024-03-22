import React from "react";

import { Logo } from "../Logo";
import { AllCategoriesBtn } from "./AllCategoriesBtn";
import { USER_LINKS } from "./constants";
import { HeaderLink } from "./HeaderLink";

interface Props {
  toggleMenu: () => void;
}

export const Header: React.FC<Props> = ({ toggleMenu }) => (
  <header className="bg-blue">
    <div className="container flex items-center justify-between py-3.5">
      <div className="flex items-center gap-10">
        <Logo />
        <AllCategoriesBtn toggleMenu={toggleMenu} />
      </div>

      <ul className="flex items-center gap-10">
        {USER_LINKS.map(link => (
          <li key={link.label} className="flex">
            <HeaderLink
              href={link.href}
              icon={link?.icon}
              wrapperClassName={link.wrapperClassName}
              labelClassName={link.labelClassName}
              label={link.label}
            />
          </li>
        ))}
      </ul>
    </div>
  </header>
);
