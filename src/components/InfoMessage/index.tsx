import React from "react";


interface Props {
  children: React.ReactNode,
  textColor: string,
}

export const InfoMessage: React.FC<Props> = ({ children, textColor }) => (
  <p
    className={`
    font-bold text-4xl text-${textColor}
    rounded-lg border-4 border-grey
    size-max mx-auto my-6 p-4
  `}
  >
    {children}
  </p>
);

