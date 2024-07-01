import { UilPlusCircle } from "@iconscout/react-unicons";
import Todo from "./Todo";
import { useRef, useState, useContext } from "react";
import { TodosContext } from "../contexts/todosContext";

// const initialTodos = [
//   {
//     id: "1",
//     title: "البحث عن جديد رياكت",
//     isDone: false,
//   },
//   {
//     id: "2",
//     title: "walk for hour",
//     isDone: false,
//   },
//   {
//     id: "3",
//     title: "Read about mechine learning",
//     isDone: false,
//   },
// ];

const TodoList = () => {
  // const [tasks, setTasks] = useState(initialTodos);
  const { todos, setTodos } = useContext(TodosContext);
  const inputRef = useRef("");

  const handelInput = () => {
    const currentValue = inputRef.current.value;
    setTodos([...todos, { id: "4", title: [currentValue], isDone: false }]);
  };

  return (
    <div className="container">
      <h2>قائمة المهام</h2>
      <div className="new_todo_input">
        <input type="text" placeholder="اضف مهمة..." ref={inputRef} />
        <UilPlusCircle
          className="add_icon"
          size="32"
          color="#a6a6a6"
          onClick={handelInput}
        />
      </div>
      <div class="newItem__select">
        <select class="filter">
          <option value="all">الكل</option>
          <option value="completed">مكتمل</option>
          <option value="unCompleted">غير مكتمل</option>
        </select>
      </div>
      <ul className="todo__list">
        {todos.map((todo) => (
          <Todo id={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
