import { AllOffers } from "./components/All-Offers";
import { ListCategories } from "./components/List-Categories";
import { Poster } from "./components/Poster";

export const Home = () => {
  return (
    <main className="container py-14 flex flex-col gap-5">
      <ListCategories />
      <Poster />
      <AllOffers />
    </main>
  )
};
