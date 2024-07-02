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
  const [value, setValue] = useState("all");
  const inputRef = useRef("");
  let todosWillRender = todos;

  const doneTodos = todos.filter((t) => {
    return t.isDone;
  });

  const notDoneTodos = todos.filter((t) => {
    return !t.isDone;
  });

  const handelInput = () => {
    const currentValue = inputRef.current.value;
    setTodos([...todos, { id: "4", title: [currentValue], isDone: false }]);
  };

  const handleFilterChange = (e) => {
    setValue(e.target.value);
  };

  if (value === "completed") {
    todosWillRender = doneTodos;
  } else if (value === "unCompleted") {
    todosWillRender = notDoneTodos;
  } else {
    todosWillRender = todos;
  }

  console.log(todos);
  console.log(todosWillRender);

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
        <select class="filter" value={value} onChange={handleFilterChange}>
          <option value="all">الكل</option>
          <option value="completed">مكتمل</option>
          <option value="unCompleted">غير مكتمل</option>
        </select>
      </div>
      <ul className="todo__list">
        {todosWillRender.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
