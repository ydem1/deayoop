import cn from "classnames";
import { Message } from "components/Message";
import { getOffers } from "features/offers/offerSlice";
import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/store";

import { Article } from "./Article";

interface Props {
  displayMode: boolean,
}

export const OfferGrid: React.FC<Props> = ({ displayMode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { offers, loading, error } = useSelector((state: RootState) => state.offers)

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  if (error) {
    return <Message message={error} textColor="error" />;
  }

  if (offers.length === 0 && !loading) {
    return <Message message={'There are no offers at the moment'} textColor="ligthBlue" />;
  }

  return (
    loading ? (
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
        cn('grid gap-2 mt-1',
          {
            'grid-cols-3': displayMode,
            'grid-rows-1': !displayMode,
          }
        )
      }>
        {
          offers.map(offer => (
            <li key={offer.id}>
              <Article offer={offer} displayMode={displayMode} />
            </li>
          ))
        }
      </ul >
    )
  )
};

