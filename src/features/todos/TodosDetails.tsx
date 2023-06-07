import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTodosQuery, useUpdateTodoMutation } from "../../api/apiSlice";

const TodosDetails = () => {
  const [todoValue, setTodoValue] = useState();

  const navigate = useNavigate();
  const { id: todoId } = useParams();

  const [updateTodo] = useUpdateTodoMutation();
  const { data: todos, refetch } = useGetTodosQuery();

  const handleUpdateTodo = async () => {
    try {
      const response = await updateTodo({
        id: todoId,
        title: todoValue,
      }).unwrap();
      console.log(response);
      refetch();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const oldValue = todos?.find((todo) => todo.id === Number(todoId));
    setTodoValue(oldValue.title);
  }, []);

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
