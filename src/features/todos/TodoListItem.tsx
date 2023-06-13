import { useDeleteTodoMutation } from "../../api/apiSlice";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TodoType } from "../../types/types";

interface TodoListItemProps {
  todo: TodoType;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {

  const [deleteTodo] = useDeleteTodoMutation();

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-between items-center p-5 text-center mx-20 my-2 text-lg font-semibold border-blue-400 border">
      <p className="">{todo.title}</p>
      <p className="">{todo.importance}</p>
      <div className="flex gap-3">
        <Link to={`todos/${todo.id}`}>
          <FaPen />
        </Link>
        <FaRegTimesCircle onClick={() => handleDeleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoListItem;
