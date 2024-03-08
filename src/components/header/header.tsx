import { Link } from "react-router-dom";
import { Logo } from "../logo";

export function Header() {
  const hoverStyle = 'hover:scale-105 duration-300';

  return (
    <header className="bg-blue">
      <div className="container flex items-center justify-between py-3.5">
        <div className="flex items-center gap-10">
          <Logo />

          <button className={`
            flex items-center 
            p-2.5 gap-2.5 
            border border-solid border-black rounded-lg
            ${hoverStyle}
          `}>
            <i className="fa-solid fa-bars size-5" />
            <p className="text-black text-sm font-semibold">
              All Categories
            </p>
          </button>
        </div>

        <div className="flex items-center gap-10">
          <Link
            className={`
              flex gap-3
              ${hoverStyle}
            `}
            to='/'
          >
            <i className="fa-regular fa-heart" />
            <p className="text-black text-sm font-semibold">
              Favourite
            </p>
          </Link>

          <Link
            className={`
            text-black text-sm font-bold
            ${hoverStyle}
          `}
            to='/'
          >
            Log in
          </Link>

          <Link
            className={`
              bg-darkBlue rounded-lg
              py-2 px-4
              text-white text-sm font-bold 
              ${hoverStyle}
            `}
            to='/'
          >
            Sing Up
          </Link>
        </div>
      </div>
    </header>
  )
}
