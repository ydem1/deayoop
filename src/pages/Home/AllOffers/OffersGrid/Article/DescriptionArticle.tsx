import { Rating } from "components/Rating";

interface Props {
  categoryTitle: string;
  rating: number;
  title: string;
  description: string | null;
}

export const DescriptionArticle: React.FC<Props> = ({
  categoryTitle,
  rating,
  title,
  description
}) => (
  <div className="flex grow flex-col gap-2 px-3 py-4 ">
    <div className="flex justify-between">
      <p className=" text-black font-medium text-sm">{categoryTitle}</p>

      <Rating currentRating={rating} />
    </div>

    <h3 className="text-black text-base font-bold">{title}</h3>

    <p className="text-black text-base font-medium">
      {description}
    </p>

    <div className="flex justify-between items-center">
      <p
        className="
      text-black font-semibold text-xs
      bg-grey rounded-lg
      px-2 py-1
    "
      >
        Investing
      </p>

      <button>
        <i className="fa-regular fa-heart" />
      </button>
    </div>
  </div>
);

