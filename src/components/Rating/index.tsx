import React from "react";

interface Props {
  currentRating: number,
}

const ARRAY_NUMBERS = [1, 2, 3, 4, 5];

export const Rating: React.FC<Props> = ({ currentRating }) => (
  <ul className="flex gap-1.5">
    {ARRAY_NUMBERS.map(num => (
      <li key={num}>
        <i className={`fa-star ${num - 1 < currentRating ? 'fa-solid' : 'fa-regular'}`} />
      </li>
    ))}
  </ul>
);
