import { useDeleteTodoMutation } from "../../api/apiSlice";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

const TodoListItem = ({ todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex  justify-between items-center p-5 text-center w-96 mx-auto my-2 text-lg font-semibold border-blue-400 border">
      <p>{todo.title}</p>
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
