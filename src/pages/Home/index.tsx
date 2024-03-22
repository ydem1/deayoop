import { AllOffers } from "./AllOffers";
import { ListCategories } from "./ListCategories";
import { Poster } from "./Poster";


export const Home = () => (
  <main className="container py-14 flex flex-col gap-5">
    <ListCategories />
    <Poster />
    <AllOffers />
  </main>
);
