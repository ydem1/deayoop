import React from "react";

import { HEADER_LINKS } from "../constants";

interface Props {
  toggleMenu: () => void;
}

export const AllCategoriesBtn: React.FC<Props> = ({ toggleMenu }) => (
  <button
    className="
  flex items-center 
  p-2.5 gap-2.5 
  border border-solid border-black rounded-lg
"
    onClick={toggleMenu}
  >
    <i className="fa-solid fa-bars size-5" />
    <p className="text-black text-sm font-semibold">
      {HEADER_LINKS.MENU}
    </p>
  </button>
);
