import { hoverStyle } from "../../../../../../constants/hoverStyle";
import { Offer } from "../../../../../../types/Offer";

interface Props {
  offer: Offer,
}

export const ArticleColumn: React.FC<Props> = ({ offer }) => {
  return (
    <article className="border border-borderOffer rounded-lg">
      <div className="relative">
        <img className="rounded-t-lg" src='img/all-offers/default.png' alt={offer.path} />
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

      <div className="flex flex-col gap-2 px-3 py-4">
        <div className="flex justify-between">
          <p className=" text-black font-medium text-sm">{offer.category.title}</p>

          <ul className="flex gap-1.5">
            {Array.from({ length: 5 }, (_, index) => (
              <li key={index}>
                <i className={`fa-star ${index < offer.rating ? 'fa-solid' : 'fa-regular'}`} />
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-black text-base font-bold">{offer.title}</h3>

        <p className="text-black text-base font-medium">
          {offer.description}
        </p>

        <div className="flex justify-between items-center">
          <p className="
                    text-black font-semibold text-xs
                    bg-grey rounded-lg
                    px-2 py-1
                  ">
            Investing
          </p>

          <button className={hoverStyle}>
            <i className="fa-regular fa-heart" />
          </button>
        </div>
      </div>
    </article>
  )
};

