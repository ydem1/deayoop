import { useFormik } from "formik";

export const Profile = () => {
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

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
    },
    onSubmit: value => {
      console.log(value);
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

      if (!values.phone) {
        errors.phone = 'Phone is required';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      }

      return errors;
    }
  });

  return (
    <div className="grow">
      <h2 className="font-bold text-2xl">
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
          />

          {formik.errors.fullName && (
            <p className="text-red">
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
            <p className="text-red">
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
            <p className="text-red">
              {formik.errors.email}
            </p>
          )}
        </div>




        <button type="submit">Sumbit</button>
      </form>

    </div>
  );
};
