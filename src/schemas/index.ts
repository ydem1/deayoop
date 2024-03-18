import * as yup from 'yup';

const fullNameRules = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

export const basicSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "The Full Name must be min 3 characters long")
    .matches(fullNameRules, { message: "Please enter a vaild Full Name" })
    .required("Required"),
  email: yup
    .string()
    .email("Please enter a vaild Email")
    .required("Required"),
  phone: yup
    .string()
    .min(11, "Required"),

});