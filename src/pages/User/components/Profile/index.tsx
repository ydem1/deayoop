import { useState } from "react";
import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { updata } from "features/user/userSlice";
import cn from "classnames";
import { User } from "types/User";

export const Profile = () => {
  const [isFormSend, setIsFormSend] = useState(false);

  const user = useSelector((state: RootState) => state.user);
  const {
    fullName,
    phone,
    email,
  }: Omit<User, 'rating' | 'revies'> = user;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fullName,
      phone,
      email,
      file: null,
    },
    onSubmit: value => {
      console.log(value);
      setIsFormSend(true);
      setTimeout(() => setIsFormSend(false), 2000);

      const obj = {
        fullName: value.fullName,
        phone: value.phone,
        email: value.email,
      }

      dispatch(updata(obj))
    },
    validate: values => {
      const errors: {
        fullName?: string,
        phone?: string,
        email?: string,
      } = {};

      if (!validateEmail(values.email)) {
        errors.email = 'Invalid email format. Please enter a valid email address.';
      }

      if (!values.fullName) {
        errors.fullName = 'FullName is required';
      }

      if (values.phone.length !== 11) {
        errors.phone = 'Phone should have 8 digits';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      }

      return errors;
    }
  });

  const isBtnDisable =
    fullName === formik.values.fullName &&
    phone === formik.values.phone &&
    email === formik.values.email;

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handlePhoneChange = (value: string) => {
    if (formik.values.phone.length > value.length) {
      formik.handleChange({ target: { name: 'phone', value } });

      return;
    }

    const digitsOnly = value.replace(/\D/g, '');
    const formattedValue = `+${digitsOnly.slice(0, 1)} ${digitsOnly.slice(1, 4)} ${digitsOnly.slice(4, 8)}`;
    formik.handleChange({ target: { name: 'phone', value: formattedValue } });
  };

  return (
    <div className="grow">
      <h2 className="font-bold text-2xl mb-8">
        Profile
      </h2>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <div className="border border-grey rounded-lg flex py-3 px-4">
          <label
            htmlFor='fullName'
            className=" text-ligthBlue font-semibold text-lg mr-2"
          >
            Full Name:
          </label>

          <input
            className="grow font-semibold text-base"
            type="text"
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maxLength={15}
          />

          {formik.errors.fullName && (
            <p className="text-error">
              {formik.errors.fullName}
            </p>
          )}
        </div>

        <div className="border border-grey rounded-lg flex py-3 px-4">
          <label
            htmlFor='phone'
            className=" text-ligthBlue font-semibold text-lg mr-2"
          >
            Phone:
          </label>

          <input
            className="grow font-semibold text-base"
            type="text"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={(event) => handlePhoneChange(event.target.value)}
            onBlur={formik.handleBlur}
          />

          {formik.errors.phone && (
            <p className="text-error">
              {formik.errors.phone}
            </p>
          )}
        </div>

        <div className="border border-grey rounded-lg flex py-3 px-4">
          <label
            htmlFor='email'
            className=" text-ligthBlue font-semibold text-lg mr-2"
          >
            Email:
          </label>

          <input
            className="grow font-semibold text-base"
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.errors.email && (
            <p className="text-error">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div className="border border-grey rounded-lg flex flex-col items-center justify-center py-3 px-4">
          <label
            htmlFor='file'
            className=" text-ligthBlue font-semibold text-lg w-full"
          >
            <p className="text-center">Upload CV:</p>
            <p className="text-center">uploaded file: {formik.values.file}</p>
          </label>

          <input
            className="hidden"
            type="file"
            id="file"
            name="file"
            onChange={formik.handleChange}
          />
        </div>

        <button
          className={cn(
           'w-max',
            'mt-4 p-3',
            'text-white font-semibold text-base',
            'rounded-lgF',
            {
              'bg-darkBlue': !isBtnDisable,
              'bg-ligthBlue ': isBtnDisable,
            }
            )}
          type="submit"
          disabled={isBtnDisable}
        >
          Save Changes
        </button>
      </form>

      <p
        className={`
          absolute left-1/2 transform -translate-x-1/2
          transition-all duration-300
          ${isFormSend ? 'top-1/2 -translate-y-1/2' : '-top-40'}
          bg-white
          p-6
          text-6xl
          text-success
          rounded-lg 
        `}
      >
        Changes are saved
      </p>
    </div>
  );
};
