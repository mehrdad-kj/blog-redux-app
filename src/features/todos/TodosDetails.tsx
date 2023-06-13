import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTodosQuery, useUpdateTodoMutation } from "../../api/apiSlice";
import { TodoType } from "../../types/types";


interface TodosType {
  data: TodoType[]
}

const TodosDetails = () => {
  const [todoInputValue, setTodoInputValue] = useState<string>();
  const [todoSelectValue, setTodoSelectValue] = useState<string>();


  const navigate = useNavigate();
  const { id: todoId } = useParams();

  const [updateTodo] = useUpdateTodoMutation();
  const { data: todos } = useGetTodosQuery<TodosType>("TODOS");

  const handleUpdateTodo = async () => {
    try {
       await updateTodo({
        id: todoId,
        title: todoInputValue,
        importance: todoSelectValue,
      })
      navigate("/simple-redux-app");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const oldValue : TodoType | undefined = todos?.find((todo) => todo.id === Number(todoId));
    setTodoInputValue(oldValue?.title);
  }, [todoId, todos]);

  return (
    <div className="flex flex-col w-96 mx-auto my-20">
      <input
        className="my-2 border-2 border-sky-600 p-2 rounded"
        type="text"
        value={todoInputValue}
        onChange={(e) => setTodoInputValue(e.target.value)}
      />
       <select
        className="w-full my-2 border-2 border-sky-600 p-2 rounded"
        name="todoLevel"
        id="todoLevel"
        value={todoSelectValue}
        onChange={(e) => setTodoSelectValue(e.target.value)}
      >
        <option value="Important">Important</option>
        <option value="Emergency">Emergency</option>
        <option value="Later">Later</option>
      </select>
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
  );
};

export default TodosDetails;
