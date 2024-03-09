import React, { useEffect, useState } from "react";

import { Offer } from "../../../../../types/Offer";
import { get } from "../../../../../httpClient/client";

import { ArticleColumn } from "./Articles/Articles-Column";
import { ArticleRow } from "./Articles/Articles-Row";

interface Props {
  orientation: boolean,
}

export const OfferGrid: React.FC<Props> = ({ orientation }) => {
  const [visableOffers, setVisableOffers] = useState<Offer[]>([]);

  useEffect(() => {
    get<Offer[]>('offers/all/').then(setVisableOffers);
  }, []);

  return (
    <ul className={`grid gap-2 mt-1 ${orientation ? 'grid-cols-3' : 'grid-rows-1'}`}>
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
    </ul>
  )
};

