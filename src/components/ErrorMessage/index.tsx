import React from "react";


interface Props {
  errorMessage: string,
}

export const ErrorMessage: React.FC<Props> = ({ errorMessage }) => {
  return (
    <p
      className="
        font-bold text-4xl text-error
        rounded-lg border-4 border-grey
        size-max mx-auto my-6 p-4
      "
    >
      {errorMessage}
    </p>
  );
};

