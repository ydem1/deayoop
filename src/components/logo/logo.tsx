import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      className="
      bg-logo bg-contain bg-no-repeat
      w-[151px] h-[46px]
      hover:scale-105
      duration-300
    "
      to='/'
    >
      <div className="logo" />
    </Link>
  )
};
