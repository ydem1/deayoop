import React from "react";
import { useField } from "formik";
import cn from "classnames";

interface Props {
  label: string;
  formattedValue?: (value: string) => string;
  maxLength?: number;
  name: string;
  type: "text" | "email";
}

export const Input: React.FC<Props> = ({
  label,
  formattedValue,
  maxLength,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (formattedValue) {
      setValue(formattedValue(inputValue));
    } else {
      setValue(inputValue);
    }
  };

  return (
    <div className={cn(
      'border border-grey rounded-lg flex py-3 px-4',
      { 'border-error': meta.error && meta.touched }
    )}>
      <label
        htmlFor='fullName'
        className=" text-ligthBlue font-semibold text-lg mr-2"
      >
        {label}
      </label>

      <input
        className="grow font-semibold text-base"
        {...field}
        {...props}
        onChange={handleChange}
        maxLength={maxLength}
      />

      {meta.error && meta.touched && (
        <p className="text-error">
          {meta.error}
        </p>
      )}
    </div>
  );
}