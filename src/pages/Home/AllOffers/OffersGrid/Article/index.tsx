import cn from "classnames";
import { Offer } from "types/Offer";

import { ArticleDescription } from "./ArticleDescription";
import { ArticleImage } from "./ArticleImage";

interface Props extends Offer {
  displayMode: boolean;
}

export const Article: React.FC<Props> = ({
  category,
  rating,
  title,
  description,
  displayMode,
}) => (
  <article className={cn(
    'border border-borderShadow rounded-lg',
    { 'flex justify-between': !displayMode }
  )}>
    <ArticleImage
      alt={title}
      imageClassName={cn(
        'rounded-l-lg',
        { 'basis-1/4': !displayMode }
      )}
    />

    <ArticleDescription
      categoryTitle={category.title}
      rating={rating}
      title={title}
      description={description}
    />
  </article>
);

