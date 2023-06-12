import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTodosQuery, useUpdateTodoMutation } from "../../api/apiSlice";
import { TodoType } from "../../types/types";


interface TodosType {
  data: TodoType[]
}

const TodosDetails = () => {
  const [todoValue, setTodoValue] = useState<string>();

  const navigate = useNavigate();
  const { id: todoId } = useParams();

  const [updateTodo] = useUpdateTodoMutation();
  const { data: todos } = useGetTodosQuery<TodosType>("TODOS");

  const handleUpdateTodo = async () => {
    try {
       await updateTodo({
        id: todoId,
        title: todoValue,
      })
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const oldValue : TodoType | undefined = todos?.find((todo) => todo.id === Number(todoId));
    setTodoValue(oldValue?.title);
  }, [todoId, todos]);

  return (
    <div className="flex flex-col w-96 mx-auto my-20">
      <input
        className="my-2 border-2 border-sky-600 p-2 rounded"
        type="text"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
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
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default TodosDetails;
