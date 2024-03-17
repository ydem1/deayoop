import { Link, useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "constants/routes";

export const Pagination = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  // the string splits the URL using the "/" separator and extracts the last part of the URL
  // https://ydem1.github.io/deayoop/user/help ----> help
  const lastPart = pathname.split('/').slice(-1)[0];

  // write the letter of the current page with a capital letter 
  // help ---> Help
  const currentpage = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);

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
          {currentpage}
        </p>
      </div>
    </div>
  )
};


