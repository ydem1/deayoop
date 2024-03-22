import { useField } from "formik";

export const InputFile = () => {
  const filedFile = {
    name: 'file',
    type: 'file',
    id: 'file',
  }
  const [field] = useField(filedFile);

  return (
    <div className="border border-grey rounded-lg flex flex-col items-center justify-center py-3 px-4">
      <label
        htmlFor='file'
        className=" text-ligthBlue font-semibold text-lg w-full"
      >
        <p className="text-center">Upload CV:</p>
        <p className="text-center">uploaded file: {field.value}</p>
      </label>

      <input
        className="hidden"
        {...filedFile}
        {...field}
      />
    </div>
  );
};
