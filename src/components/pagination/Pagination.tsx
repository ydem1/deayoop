import { Link, useLocation } from "react-router-dom";

export const Pagination = () => {
  const { pathname } = useLocation();

  const previousPath = pathname.substring(0, pathname.lastIndexOf('/'));
  const lastPart = pathname.split('/').slice(-1)[0];
  const currentpage = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);

  return (
    <div className="flex gap-6 items-center">
      <Link to={previousPath} className="flex items-center gap-2 bg-blue rounded-lg text-sm text-ligthBlue font-semibold px-2 py-1">
        <i className="fa-solid fa-chevron-left" />
        <p>Previous Page</p>
      </Link>

      <div className="flex gap-1">
        <Link to='/' className="text-sm text-ligthBlue">
          Home
        </Link>

        <p className="text-sm text-ligthBlue font-bold">
          {currentpage}
        </p>
      </div>
    </div>
  )
};


