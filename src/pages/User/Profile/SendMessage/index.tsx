import cn from "classnames";
import React from "react";

interface Props {
  isFormSend: boolean;
}

export const SendMessage: React.FC<Props> = ({ isFormSend }) => (
  <p
    className={cn(
      'absolute -top-40 left-1/2 transform -translate-x-1/2',
      'transition-all duration-300',
      ' bg-white rounded-lg ',
      'p-6',
      'text-6xl text-success',
      { 'top-1/2 -translate-y-1/2': isFormSend }
    )}
  >
    Changes are saved
  </p>
);
