import React from "react";

interface Props {
  currentRating: number,
}

export const Rating:React.FC<Props> = ({ currentRating }) => {
  return (
    <ul className="flex gap-1.5">
      {Array.from({ length: 5 }, (_, index) => (
        <li key={index}>
          <i className={`fa-star ${index < currentRating ? 'fa-solid' : 'fa-regular'}`} />
        </li>
      ))}
    </ul>
  );
};
