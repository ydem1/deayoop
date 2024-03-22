import cn from "classnames";
import { Offer } from "types/Offer";

import { DescriptionArticle } from "./DescriptionArticle";
import { ImgArticle } from "./ImgArticle";

interface Props {
  offer: Offer;
  displayMode: boolean;
}

export const Article: React.FC<Props> = ({
  offer: {
    path,
    category,
    rating,
    title,
    description,
  },
  displayMode,
}) => (
  <article className={cn(
    'border border-borderShadow rounded-lg',
    { 'flex justify-between': !displayMode }
  )}>
    <ImgArticle path={path} imgStyle={cn(
      'rounded-l-lg',
      { 'basis-1/4': !displayMode }
    )} />

    <DescriptionArticle
      categoryTitle={category.title}
      rating={rating}
      title={title}
      description={description}
    />
  </article>
);

