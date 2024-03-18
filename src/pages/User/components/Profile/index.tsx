import { useState } from "react";
import { Formik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { patch } from "features/user/userSlice";
import cn from "classnames";
import { User } from "types/User";
import { basicSchema } from "schemas";
import { Form } from "react-router-dom";
import { Input } from "./Input";

type UserInput = Omit<User, 'rating' | 'revies'>;

export const Profile = () => {
  const [isFormSend, setIsFormSend] = useState(false);

  const user = useSelector((state: RootState) => state.user);
  const {
    fullName,
    phone,
    email,
  }: UserInput = user;

  const dispatch = useDispatch();

  const isFormChanged = (values: UserInput) => (
    values.fullName !== fullName ||
    values.phone !== phone ||
    values.email !== email
  );

  const handleSubmit = (values: UserInput) => {
    setIsFormSend(true);
    setTimeout(() => setIsFormSend(false), 2000);

    const obj = {
      fullName: values.fullName,
      phone: values.phone,
      email: values.email,
    }

    dispatch(patch(obj))
  }

  const formattedPhone = (inputValue: string) => {
    const digitsOnly = inputValue.replace(/\D/g, '');
  
    if (digitsOnly.length === 0) {
      return '';
    }
  
    let formattedValue = '+';
  
    formattedValue += digitsOnly.slice(0, Math.min(1, digitsOnly.length));
  
    for (let i = 1; i < digitsOnly.length; i += 3) {
      formattedValue += ' ' + digitsOnly.slice(i, i + 3);
    }
  
    return formattedValue;
  };

  return (
    <div className="grow">
      <h2 className="font-bold text-2xl mb-8">
        Profile
      </h2>

      <Formik
        initialValues={{
          fullName,
          phone,
          email,
          file: null,
        }}
        onSubmit={handleSubmit}
        validationSchema={basicSchema}
      >
        {(formikProps) => (
          <Form onSubmit={formikProps.handleSubmit}>
            <Input
              label="Full name"
              name="fullName"
              type="text"
            />

            <Input
              label="Phone"
              formattedValue={formattedPhone}
              maxLength={11}
              name="phone"
              type="text"
            />

            <Input
              label="Email"
              name="email"
              type="email"
            />

            {/* <div className="border border-grey rounded-lg flex flex-col items-center justify-center py-3 px-4">
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
       </div> */}

            <button
              className={cn(
                'w-max',
                'mt-4 p-3',
                'text-white font-semibold text-base',
                'rounded-lg bg-darkBlue',
                {
                  'bg-ligthBlue ': !formikProps.isValid || !isFormChanged(formikProps.values),
                }
              )}
              type="submit"
              disabled={!formikProps.isValid || !isFormChanged(formikProps.values)}
            >
              Save Changes
            </button>

          </Form>
        )}
      </Formik>

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
