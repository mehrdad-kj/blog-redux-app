import { useState } from "react";
import { useAddTodoMutation, useGetTodosQuery } from "../../api/apiSlice";
import TodoListItem from "./TodoListItem";

const AddTodo = () => {
  const [todoValue, setTodoValue] = useState("");
  const { data: todos, isLoading } = useGetTodosQuery();
  const [AddTodo] = useAddTodoMutation();

  const canAdd = todoValue.trim() !== "";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (canAdd) {
      try {
        await AddTodo({ title: todoValue });
        setTodoValue("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <form
        className="w-96 flex flex-col justify-center mx-auto"
        action="submit"
        onSubmit={handleFormSubmit}
      >
        <input
          className="w-full my-2 border-2 border-sky-600 p-2 rounded"
          type="text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button className="w-full my-2 border bg-sky-600 p-5 text-white font-extrabold">
          Add Todo
        </button>
      </form>
      {isLoading ? (
        <p>Loading ... </p>
      ) : todos && todos.length > 0 ? (
        todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />)
      ) : (
        <div>No todos found...</div>
      )}
    </>
  );
};

export default AddTodo;
