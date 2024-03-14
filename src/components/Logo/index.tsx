import { Link } from "react-router-dom";

import { ROUTES } from "constants/routes";

export const Logo = () => {
  return (
    <Link
      className="
        bg-logo bg-contain bg-no-repeat
        w-40 h-12
      "
      to={ROUTES.home}
    >
      <div className="logo" />
    </Link>
  )
};
