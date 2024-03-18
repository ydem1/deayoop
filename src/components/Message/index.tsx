import React from "react";


interface Props {
  message: string,
  textColor: string,
}

export const Message: React.FC<Props> = ({ message, textColor }) => (
  <p
    className={`
    font-bold text-4xl text-${textColor}
    rounded-lg border-4 border-grey
    size-max mx-auto my-6 p-4
  `}
  >
    {message}
  </p>
);

