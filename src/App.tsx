import { Route, Routes } from "react-router-dom";
import TodoList from "./features/todos/TodoList";
import TodosDetails from "./features/todos/TodosDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="todos/:id" element={<TodosDetails />} />
      </Routes>
    </>
  );
}

export default App;
