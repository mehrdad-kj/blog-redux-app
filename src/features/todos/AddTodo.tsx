import { useState } from "react";
import { useAddTodoMutation, useGetTodosQuery } from "../../api/apiSlice";
import TodoListItem from "./TodoListItem";
import { TodoType } from "../../types/types";

interface TodosType {
  data: TodoType[];
  isLoading: boolean;
}

const AddTodo = () => {
  const [todoValue, setTodoValue] = useState<string>("");
  const { data: todos, isLoading } = useGetTodosQuery<TodosType>("TODOS");

  const [addTodo] = useAddTodoMutation();

  const canAdd = todoValue.trim() !== "";

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (canAdd) {
      try {
        await addTodo({ title: todoValue });
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
        <button
          className="w-full my-2 border bg-sky-600 p-5 text-white font-extrabold"
          type="submit"
          disabled={!canAdd}
        >
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
