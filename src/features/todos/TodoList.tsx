import { useGetTodosQuery } from "../../api/apiSlice";
import AddTodoForm from "./AddTodoForm";
import TodoListItem from "./TodoListItem";
import { TodoType } from "../../types/types";

interface TodosType {
  data: TodoType[],
  isLoading: boolean,
  isError: boolean
}

const TodoList = () => {
  const { data: todos, isLoading, isError } = useGetTodosQuery<TodosType>("TODOS");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching todos.</p>;
  }

  return (
    <div className="my-10">
      <h1 className="w-96 mx-auto text-center text-4xl my-5 text-sky-700">
        Todo List
      </h1>
      <AddTodoForm />
      {todos && todos.length > 0 ? (
        todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />)
      ) : (
        <div>No todos found...</div>
      )}
    </div>
  );
};

export default TodoList;
