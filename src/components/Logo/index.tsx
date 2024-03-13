import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      className="
        bg-logo bg-contain bg-no-repeat
        w-40 h-12
      "
      to='/'
    >
      <div className="logo" />
    </Link>
  )
};
