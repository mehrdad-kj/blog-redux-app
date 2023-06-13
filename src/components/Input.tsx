import { inputTypes } from "../types/types";
import { useFormContext, Controller } from "react-hook-form";

const Input = ({ name, ...rest }: inputTypes) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "This field is required" }}
      render={({ field, fieldState: { error } }) => (
        <>
          <input
            {...field}
            className="w-full my-2 border-2 border-sky-600 p-2 rounded"
            {...rest}
          />
          {error && <span>{error.message}</span>}
        </>
      )}
    />
  );
};

export default Input;
