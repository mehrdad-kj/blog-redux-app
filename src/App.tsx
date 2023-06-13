import { Route, Routes } from "react-router-dom";
import TodoList from "./features/todos/TodoList";
import TodosDetails from "./features/todos/TodosDetails";
// import Section from "./components/Section";

function App() {
  return (
    <>
      <Routes>
        <Route path="/simple-redux-app" element={<TodoList />} />
        <Route path="simple-redux-app/todos/:id" element={<TodosDetails />} />
      </Routes>
      {/* <Section items={["mehrdad", "ali"]} render={(item : string) => <span>{item}</span>}/> */}
    </>
  );
}

export default App;
