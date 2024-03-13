import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      className="
        bg-logo bg-contain bg-no-repeat
        w-[151px] h-[46px]
      "
      to='/'
    >
      <div className="logo" />
    </Link>
  )
};
