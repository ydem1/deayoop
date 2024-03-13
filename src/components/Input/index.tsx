import React from "react";

interface Props {
  label: string,
  type: string
  name: string,
  value: string | number,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void,
  errorMessage: string | undefined,
}

export const Input: React.FC<Props> = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  errorMessage,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    onBlur(event);
  };

  return (
    <div className="border border-grey rounded-lg flex py-3 px-4">
      <label
        htmlFor={name}
        className=" text-ligthBlue font-semibold text-lg mr-2"
      >
        {label}
      </label>

      <input
        className="grow font-semibold text-base"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {errorMessage && (
        <p className="">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
