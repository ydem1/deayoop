import { useState } from "react";
import { hoverStyle } from "../../../../constants/hoverStyle";
import { OfferGrid } from "./Offers-Grid/Offers-Grid";

export const AllOffers = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-black font-bold">All Offers</h2>
        <button
          className={`
            bg-darkBlue rounded-lg
            text-white text-sm font-bold 
            px-3 py-4
            ${hoverStyle}
          `}
          onClick={() => setToggle(!toggle)}
        >
          Row/Colunm
        </button>
      </div>
      <OfferGrid orientation={toggle}/>

    </section>
  )
};
