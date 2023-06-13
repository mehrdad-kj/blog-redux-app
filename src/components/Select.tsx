import { selectTypes } from "../types/types";
import { useFormContext, Controller } from "react-hook-form";

const Select = ({ options, name }: selectTypes) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "Please select the importance of ToDo" }}
      render={({ field }) => (
        <select
          {...field}
          className="w-full my-2 border-2 border-sky-600 p-2 rounded"
        >
          {options.map((option) => (
            <option key={option.value}>{option.label}</option>
          ))}
        </select>
      )}
    />
  );
};

export default Select;
