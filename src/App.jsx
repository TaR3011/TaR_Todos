import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Login from "./components/Login/Login";
import { TodosContext } from "./contexts/todosContext";
import { AuthContext } from "./contexts/authContext";

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

const initUsers = [
  {
    id: Date.now(),
    email: "test@test.com",
    name: "trr",
    pass: "123456789",
    isLoggedIn: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [users, setUsers] = useState(initUsers);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ users, setUsers }}>
      <TodosContext.Provider value={{ todos, setTodos }}>
        {currentUser ? (
          <TodoList signOut={handleSignOut} />
        ) : (
          <Login setCurrentUser={setCurrentUser} />
        )}
      </TodosContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
