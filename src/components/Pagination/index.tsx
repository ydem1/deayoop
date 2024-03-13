import { Link, useLocation, useNavigate } from "react-router-dom";

export const Pagination = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lastPart = pathname.split('/').slice(-1)[0];
  const currentpage = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);

  const handlePrevBtn = () => {
    if (lastPart === 'user') {
      navigate('..');
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


