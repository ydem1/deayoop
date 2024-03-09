import { useEffect, useState } from "react";
import { Offer } from "../../../../../types/Offer";
import { hoverStyle } from "../../../../../constants/hoverStyle";
import { get } from "../../../../../httpClient/client";

export const OfferGrid = () => {
  const [visableOffers, setVisableOffers] = useState<Offer[]>([]);

  useEffect(() => {
    get<Offer[]>('offers/all/').then(setVisableOffers);
  }, []);

  return (
    <ul className="grid grid-cols-3 gap-2 mt-1">
      {
        visableOffers.map(offer => (
          <li key={offer.id}>
            <article className="border border-borderOffer rounded-lg">
              {/* <img src={offer.path} alt={offer.path} /> */}
              <img className="rounded-t-lg" src='img/all-offers/default.png' alt={offer.path} />

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
                  {offer.description
                    ? offer.description
                    : `Lorem ipsum dolor sit amet 
                      consectetur adipisicing elit. Odio facil.`}
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
          </li>
        ))
      }
    </ul>
  )
};

