import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { TodosContext } from "./contexts/todosContext";

const initialTodos = [
  {
    id: "1",
    title: "البحث عن جديد رياكت",
    isDone: false,
  },
  {
    id: "2",
    title: "walk for hour",
    isDone: false,
  },
  {
    id: "3",
    title: "Read about mechine learning",
    isDone: false,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(initialTodos);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <TodoList />
    </TodosContext.Provider>
  );
}

export default App;
