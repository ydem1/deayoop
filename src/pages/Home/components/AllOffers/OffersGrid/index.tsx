import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

import { Offer } from "types/Offer";
import { get } from "httpClient";

import { ArticleColumn } from "./Articles/ArticlesСolumn";
import { ArticleRow } from "./Articles/ArticlesRow";
import { Message } from "components/Message";
import classNames from "classnames";

interface Props {
  orientation: boolean,
}

export const OfferGrid: React.FC<Props> = ({ orientation }) => {
  const [visableOffers, setVisableOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      get<Offer[]>('offers/all/')
        .then(setVisableOffers)
        .catch(() => setErrorMessage('Something went wrong try again later'))
        .finally(() => setIsLoading(false));
    }, 1400);

  }, []);

  if (errorMessage) {
    return <Message message={errorMessage} textColor="error"/>;
  }

  if (visableOffers.length === 0 && !isLoading) {
    return <Message message={'There are no offers at the moment'} textColor="ligthBlue" />;
  }

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
      < ul className={
        classNames('grid gap-2 mt-1',
          {
            'grid-cols-3': orientation,
            'grid-rows-1': !orientation,
          }
        )
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

