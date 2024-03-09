import { ListCategories } from "./components/List-Categories";
import { Poster } from "./components/Poster";

export const Home = () => {
  return (
    <main>
      <div className="container py-14 flex flex-col gap-5">
        <ListCategories />
        <Poster />
      </div>
    </main>
  )
};
