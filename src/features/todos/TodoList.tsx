import AddTodo from "./AddTodo";

const TodoList = () => {
  

  return (
    <div className="my-10">
      <h1 className="w-96 mx-auto text-center text-4xl my-5 text-sky-700">
        Todo List
      </h1>
      <AddTodo />
    </div>
  );
};

export default TodoList;
