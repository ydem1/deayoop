import { useState } from "react";

import { OfferGrid } from "./OffersGrid";


export const AllOffers = () => {
  const [isColumn, setIsColumn] = useState(true);

  const handleDispayMode = () => setIsColumn(!isColumn);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-black font-bold">All Offers</h2>
        <button
          className="
            bg-darkBlue rounded-lg
            text-white text-sm font-bold 
            px-3 py-4
          "
          onClick={handleDispayMode}
        >
          Row/Colunm
        </button>
      </div>
      <OfferGrid displayMode={isColumn} />
    </section>
  )
};

