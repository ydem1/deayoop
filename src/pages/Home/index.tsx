import { AllOffers } from "./components/AllOffers";
import { ListCategories } from "./components/ListCategories";
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
