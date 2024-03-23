import { useLocation } from "react-router-dom";
import { getCurrentPage } from "utils/functions/getCurrentPage";

export const Other = () => {
  const { pathname } = useLocation();
  const [, currentPage] = getCurrentPage(pathname);

  return (
    <div className="grow">
      <h2 className="font-bold text-2xl">
        {currentPage}
      </h2>
    </div>
  );
};
