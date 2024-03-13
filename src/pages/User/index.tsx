import classNames from "classnames";
import { NavLink, Outlet } from "react-router-dom";

import { Pagination } from "../../components/Pagination";
import { Rating } from "../../components/Rating";
import { USER_CURRENT } from "../../constants/user";

const USER_PAGES = [
  {
    id: 0,
    icon: 'fa-solid fa-bag-shopping',
    title: 'Order',
    url: '/user/order',
  },
  {
    id: 1,
    icon: 'fa-regular fa-heart',
    title: 'Favourite',
    url: '/user/favourite',
  },
  {
    id: 2,
    icon: 'fa-regular fa-life-ring',
    title: 'Help',
    url: '/user/help',
  },
  {
    id: 3,
    icon: 'fa-solid fa-gear',
    title: 'Profile',
    url: '/user/profile',
  },
];

export const User = () => {
  const {
    fullName,
    revies,
    rating,
  } = USER_CURRENT;


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
                <NavLink to={page.url} className={({ isActive }) => (
                  classNames('flex', 'items-center', 'gap-5', 'px-5', 'py-3', {
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
