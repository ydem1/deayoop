import { useLocation } from "react-router-dom";

export const Other = () => {
  const { pathname } = useLocation();
  const lastPart = pathname.split('/').slice(-1)[0];
  const currentpage = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);

  return (
    <div className="grow">
      <h2 className="font-bold text-2xl">
        {currentpage}
      </h2>
    </div>
  );
};
