import { Offer } from "types/Offer";
import { ImgArticle } from "./components/ImgArticle";
import { DescriptionArticle } from "./components/DescriptionArticle";

interface Props {
  offer: Offer,
}

export const ArticleRow: React.FC<Props> = ({ offer: {
  path,
  category,
  rating,
  title,
  description
} }) => (
  <article
    className="
    border border-borderOffer rounded-lg
    flex justify-between
  "
  >
    <ImgArticle path={path} imgStyle="basis-1/4 rounded-l-lg" />

    <DescriptionArticle
      categoryTitle={category.title}
      rating={rating}
      title={title}
      description={description}
    />
  </article>
);

