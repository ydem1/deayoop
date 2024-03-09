import { Link } from "react-router-dom";
import { Categories } from "../../../../constants/Categories";
import { hoverStyle } from "../../../../constants/hoverStyle";

export const ListCategories = () => {
  return (
    <section className="py-6">
      <h1 className="text-4xl text-black font-semibold mb-10 text-center">Main categories</h1>

      <ul className="flex justify-between px-6">
        {Categories.map(category => (
          <li key={category.id}>
            <Link to={category.url} className={`flex flex-col items-center ${hoverStyle}`}>
              <div className="bg-grey rounded-full p-9">
                <img className="size-10" src={category.img} alt={category.title} />
              </div>
              <p className="text-base text-black font-medium pt-[11px] pb-[16px]">
                {category.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
