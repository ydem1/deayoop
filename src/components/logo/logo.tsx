import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="bg-logo bg-contain w-[151px] h-[46px]" to='/'>
      <div className="logo" />
    </Link>
  )
}
