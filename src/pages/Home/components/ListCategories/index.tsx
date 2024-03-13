import { Link } from "react-router-dom";
import { CATEGOTIES } from "constants/сategories";


export const ListCategories = () => {
  return (
    <section className="py-6">
      <h1 className="text-4xl text-black font-semibold mb-10 text-center">Main categories</h1>

      <ul className="flex justify-between px-6">
        {CATEGOTIES.map(category => (
          <li key={category.id}>
            <Link to={category.url} className="flex flex-col items-center">
              <div className="bg-grey rounded-full p-9">
                <img className="size-10" src={category.img} alt={category.title} />
              </div>
              <p className="text-base text-black font-medium pt-3 pb-4">
                {category.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
