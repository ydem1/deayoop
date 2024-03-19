import cn from "classnames";
import { Pagination } from "components/Pagination";
import { Rating } from "components/Rating";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { RootState } from "store/store";

import { USER_PAGES } from "./constants";

export const User = () => {
  const user = useSelector((state: RootState) => state.user);

  const {
    fullName,
    revies,
    rating,
  } = user;

  return (
    <main className="container my-16">
      <Pagination />

      <section className="flex mt-4">
        <article className="p-5 basis-1/3">
          <div className="flex gap-10 items-center">
            <img src="./img/user/user.png" alt="User photo" />
            <div>
              <h2 className=" text-black text-xl font-bold">{fullName}</h2>
              <p className="text-black text-sm font-semibold mt-4 mb-2">{` ${revies} Reviews`}</p>
              <Rating currentRating={rating} />
            </div>
          </div>

          <ul>{
            USER_PAGES.map(page => (
              <li key={page.id}>
                <NavLink to={page.href} className={({ isActive }) => (
                  cn('flex', 'items-center', 'gap-5', 'px-5', 'py-3', {
                    'bg-blue': isActive,
                    'rounded-lg': isActive,
                    'font-semibold': isActive,
                  })
                )}>
                  <i className={page.icon} />
                  <p>{page.title}</p>
                </NavLink>
              </li>
            ))
          }</ul>
        </article>

        <Outlet />
      </section>
    </main>
  )
};
