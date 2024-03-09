import { NavLink, Outlet } from "react-router-dom";
import { Pagination } from "../../components/pagination";
import { Rating } from "../../components/rating";
import { hoverStyle } from "../../constants/hoverStyle";

export const User = () => {
  const user = {
    fullName: 'Helen Wilson',
    revies: 82,
    phone: 15481547,
    email: 'hellenFox@gmail.com',
    rating: 5,
  };

  const userPages = [
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

  return (
    <main className="container my-16">
      <Pagination />

      <section className="flex mt-4">
        <article className="p-5">
          <div className="flex gap-10 items-center">
            <img src="./img/user/user.png" alt="User photo" />
            <div>
              <h2 className=" text-black text-xl font-bold">{user.fullName}</h2>
              <p className="text-black text-sm font-semibold mt-4 mb-2">{` ${user.revies} Reviews`}</p>
              <Rating currentRating={user.rating} />
            </div>
          </div>

          <ul>{
            userPages.map(page => (
              <li key={page.id}>
                <NavLink to={page.url} className={({ isActive }) => (
                  `flex items-center gap-5 px-5 py-3 ${hoverStyle} ${isActive && 'bg-blue rounded-lg font-semibold'}`
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
