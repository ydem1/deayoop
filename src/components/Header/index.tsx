import React from "react";
import { Logo } from "../Logo";

import { ROUTES } from "constants/routes";
import { AllCategoriesBtn } from "./components/AllCategoriesBtn";
import { HeaderLink } from "./components/HeaderLink";
import { HEADER_LINK_DEFAULT, LINK_NAME } from "./constants";

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

      <div className="flex items-center gap-10">
        <HeaderLink
          url={ROUTES.home}
          icon="fa-regular fa-heart"
          styleWrapper="flex gap-3"
          styleLabel={`${HEADER_LINK_DEFAULT} font-semibold`}
          label={LINK_NAME.userFavorite}
        />

        <HeaderLink
          url={ROUTES.user}
          styleLabel={`${HEADER_LINK_DEFAULT} font-bold`}
          label={LINK_NAME.userLog}
        />

        <HeaderLink
          url={ROUTES.user}
          styleWrapper="bg-darkBlue rounded-lg py-2 px-4"
          styleLabel="text-white text-sm font-bold"
          label={LINK_NAME.userSing}
        />
      </div>
    </div>
  </header>
);
