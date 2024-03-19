import { ROUTES } from "constants/routes";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link
    className="w-40 h-12"
    to={ROUTES.home}
  >
    <img src="./img/logo/logo.png" alt="Dealyoop" />
  </Link>
);
