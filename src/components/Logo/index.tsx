import { Link } from "react-router-dom";

import { ROUTES } from "constants/routes";

export const Logo = () => {
  return (
    <Link
      className="w-40 h-12"
      to={ROUTES.home}
    >
      <img src="./img/logo/logo.png" alt="Dealyoop" />
    </Link>
  )
};
