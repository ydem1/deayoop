import { Rating } from "../../../../../../components/Rating";
import { Offer } from "../../../../../../types/Offer";

interface Props {
  offer: Offer,
}

export const ArticleRow: React.FC<Props> = ({ offer }) => {
  return (
    <article
      className="
        border border-borderOffer rounded-lg
        flex
      "
    >
      <div className="relative">
        <img className="basis-1/4 rounded-l-lg" src='img/all-offers/default.png' alt={offer.path} />
        <p
          className="
            absolute top-2 left-2 
            text-black text-xs font-bold 
            border border-grey rounded-lg
            bg-white 
            p-2 
            uppercase
          "
        >
          Top
        </p>
      </div>
      <div className="flex flex-col gap-2 grow px-5 py-6">
        <div className="flex justify-between">
          <p className=" text-black font-medium text-sm">{offer.category.title}</p>
          <Rating currentRating={offer.rating} />
        </div>

        <h3 className="text-black text-base font-bold">{offer.title}</h3>

        <p className="text-black text-base font-medium">
          {offer.description}
        </p>

        <button className="self-end">
          <i className="fa-regular fa-heart" />
        </button>
      </div>
    </article>
  )
};

