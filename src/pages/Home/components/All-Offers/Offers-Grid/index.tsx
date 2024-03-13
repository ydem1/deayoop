import React, { useEffect, useState } from "react";

import { Offer } from "../../../../../types/Offer";
import { get } from "../../../../../httpClient/client";

import { ArticleColumn } from "./Articles/Articles-Column";
import { ArticleRow } from "./Articles/Articles-Row";
import { Oval } from "react-loader-spinner";

interface Props {
  orientation: boolean,
}

export const OfferGrid: React.FC<Props> = ({ orientation }) => {
  const [visableOffers, setVisableOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      get<Offer[]>('offers/all/')
        .then(setVisableOffers)
        .catch(e => console.error(e))
        .finally(() => setIsLoading(false));
    }, 1400);

  }, []);

  return (
    isLoading ? (
      <div className="flex justify-center">
        <Oval
          visible={true}
          width="120"
          height="120"
          secondaryColor="#eaeaea"
          color="#b2b2b2"
        />

      </div>) : (
      < ul className={`grid gap-2 mt-1 ${orientation ? 'grid-cols-3' : 'grid-rows-1'}`
      }>
        {
          visableOffers.map(offer => (
            <li key={offer.id}>
              {orientation
                ? (
                  <ArticleColumn offer={offer} />
                )
                : (
                  <ArticleRow offer={offer} />
                )
              }
            </li>
          ))
        }
      </ul >
    )
  )
};

