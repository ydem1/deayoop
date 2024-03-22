import cn from "classnames";
import { saveCurrentUser, updateEmail, updateFullName, updatePhone } from "redux/user/userSlice";
import { Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { basicSchema } from "schemas";
import { RootState } from "store/store";
import { User } from "types/User";

import { Input } from "./components/Input";
import { InputFile } from "./components/InputFile";
import { SendMessage } from "./components/SendMessage";

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

    dispatch(updateFullName(values.fullName));
    dispatch(updatePhone(values.phone));
    dispatch(updateEmail(values.email));

    dispatch(saveCurrentUser());
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

            <InputFile />

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

      <SendMessage isFormSend={isFormSend} />
    </div>
  );
};
