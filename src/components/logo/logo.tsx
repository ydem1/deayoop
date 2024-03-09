import { Link } from "react-router-dom";
import { hoverStyle } from "../../constants/hoverStyle";

export const Logo = () => {
  return (
    <Link
      className={`
      bg-logo bg-contain bg-no-repeat
      w-[151px] h-[46px]
      ${hoverStyle}
    `}
      to='/'
    >
      <div className="logo" />
    </Link>
  )
};
