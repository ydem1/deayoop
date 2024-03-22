import { ROUTES } from "constants/routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCurrentPage } from "utils/functions/getCurrentPage";

export const Pagination = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [lastPart, currentPage] = getCurrentPage(pathname);

  const handlePrevBtn = () => {
    if (lastPart === 'user') {
      navigate(ROUTES.home);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex gap-6 items-center">
      <button
        className="flex items-center gap-2 bg-blue rounded-lg text-sm text-ligthBlue font-semibold px-2 py-1"
        onClick={handlePrevBtn}
      >
        <i className="fa-solid fa-chevron-left" />
        <p>Previous Page</p>
      </button>

      <div className="flex gap-1">
        <Link to={ROUTES.home} className="text-sm text-ligthBlue">
          Home
        </Link>

        <p className="text-sm text-ligthBlue font-bold">
          {currentPage}
        </p>
      </div>
    </div>
  )
};


