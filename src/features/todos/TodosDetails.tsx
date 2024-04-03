import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTodosQuery, useUpdateTodoMutation } from "../../api/apiSlice";
import { TodoType } from "../../types/types";
import Input from "../../components/Input";
import { useForm, FormProvider } from "react-hook-form";
import Select from "../../components/Select";

interface TodosType {
  data: TodoType[];
}

const TodosDetails = () => {
  const [oldInputValue, setOldInputValue] = useState<string>();
  console.log(oldInputValue)
  const navigate = useNavigate();
  const { id: todoId } = useParams();

  const [updateTodo] = useUpdateTodoMutation();
  const { data: todos } = useGetTodosQuery<TodosType>("TODOS");

  const selectOptions = [
    { label: "important", value: "option1" },
    { label: "emergency", value: "option2" },
    { label: "later", value: "option3" },
  ];

  const methods = useForm();

  const handleUpdateTodo = methods.handleSubmit((data) => {
    try {
      updateTodo({
        id: todoId,
        title: data.inputValue,
        importance: data.selectValue,
      });
      navigate("/simple-redux-app");
    } catch (err) {
      console.log(err);
    }
  });

  useEffect(() => {
    const oldValue: TodoType | undefined = todos?.find(
      (todo) => todo.id === Number(todoId)
    );
    setOldInputValue(oldValue?.title);
  }, [todoId, todos]);

  return (
    <FormProvider {...methods}>
      <form>
        <div className="flex flex-col w-96 mx-auto my-20">
          <Input
            placeholder="Todo ..."
            label="inputValue"
            name="inputValue"
            control={methods.control}
          /> 
          <Select
            control={methods.control}
            name="selectValue"
            options={selectOptions}
          />
          <div className="flex gap-2">
            <button
              className="w-[50%] my-2 border bg-green-700 p-5 text-white font-extrabold"
              onClick={handleUpdateTodo}
            >
              Update Todo
            </button>
            <button
              className="w-[50%] my-2 border bg-red-600 p-5 text-white font-extrabold"
              onClick={() => navigate("/simple-redux-app")}
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default TodosDetails;
