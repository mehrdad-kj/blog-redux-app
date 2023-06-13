import { useAddTodoMutation } from "../api/apiSlice";
import Input from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import Select from "./Select";

interface AddTodoFormModalProps {
  onClose: () => void;
}

const AddTodoFormModal = ({ onClose }: AddTodoFormModalProps) => {
  const [addTodo] = useAddTodoMutation();

  const methods = useForm();
  const selectOptions = [
    { label: "important", value: "option1" },
    { label: "emergency", value: "option2" },
    { label: "later", value: "option3" },
  ];

  const handleFormSubmit = methods.handleSubmit((data) => {
    console.log(data);
    try {
      addTodo({ title: data.inputValue, importance: data.selectValue });

      onClose();
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <FormProvider {...methods}>
      <form
        className="w-[32rem] h-[32rem] flex flex-col justify-center mx-auto my-10 p-20 items-center bg-sky-50"
        action="submit"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          placeholder="Todo ..."
          label="inputValue"
          name="inputValue"
          control={methods.control}
        />

        <Select
          name="selectValue"
          options={selectOptions}
          control={methods.control}
        />
        <button
          className="w-full my-2 border bg-sky-600 p-5 text-white font-extrabold"
          type="submit"
          // disabled={!canAdd}
          onClick={handleFormSubmit}
        >
          Add Todo
        </button>
      </form>
    </FormProvider>
  );
};

export default AddTodoFormModal;
