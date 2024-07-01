import { UilCheck } from "@iconscout/react-unicons";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { UilEdit } from "@iconscout/react-unicons";
import { useContext } from "react";
import { TodosContext } from "../contexts/todosContext";

const Todo = ({ id, title }) => {
  const { todos, setTodos } = useContext(TodosContext);

  const handleDelete = () => {
    const updatedTodos = todos.filter((t) => {
      return t.id != id;
    });
    setTodos(updatedTodos);
  };

  return (
    <li key={id} className="todo__item">
      <div className="label">
        <span className="check__box">
          <UilCheck className="check_icon" size="32" color="#a6a6a6" />
        </span>
        <span className="item__title">{title}</span>
      </div>
      <div className="icons__section">
        <UilTrashAlt
          className="trash_icon"
          size="24"
          color="#a6a6a6"
          onClick={handleDelete}
        />
        <UilEdit className="edit_icon" size="24" color="#a6a6a6" />
      </div>
    </li>
  );
};

export default Todo;
