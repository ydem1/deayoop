import { Offer } from "types/Offer";
import { ImgArticle } from "./components/ImgArticle";
import { DescriptionArticle } from "./components/DescriptionArticle";

interface Props {
  offer: Offer;
}

export const ArticleColumn: React.FC<Props> = ({ offer: {
  path,
  category,
  rating,
  title,
  description
} }) => (
  <article className="border border-borderOffer rounded-lg">
    <ImgArticle path={path} imgStyle="rounded-l-lg" />

    <DescriptionArticle
      categoryTitle={category.title}
      rating={rating}
      title={title}
      description={description}
    />
  </article>
);

