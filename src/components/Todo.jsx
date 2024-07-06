import { UilCheck } from "@iconscout/react-unicons";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { UilEdit } from "@iconscout/react-unicons";
import { UilCheckCircle } from "@iconscout/react-unicons";
import { useContext, useEffect, useRef, useState } from "react";
import { TodosContext } from "../contexts/todosContext";

const Todo = ({ todo, updateTodoFun }) => {
  const { todos, setTodos } = useContext(TodosContext);
  const [isEditable, setIsEditable] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const inputRef = useRef();
  const checkRef = useRef();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (currentUser) {
    }
  }, []);

  useEffect(() => {
    if (todo.isDone) {
      checkRef.current.classList += " clicked";
      setIsCheck(true);
    } else {
      checkRef.current.classList = "label";
      setIsCheck(false);
    }
  }, [todo]);

  const handleDelete = () => {
    const updatedTodos = todos.filter((t) => {
      return t.id != todo.id;
    });
    setTodos(updatedTodos);
    updateTodoFun(updatedTodos);
    setIsCheck(false);
  };

  const handleUpdate = () => {
    const newTitle = inputRef.current.value;
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, title: newTitle };
      } else {
        return t;
      }
    });
    setIsEditable(false);
    setTodos(updatedTodos);
    updateTodoFun(updatedTodos);
  };

  const handleCheck = () => {
    console.log(checkRef.current.classList);
    if (!isCheck) {
      checkRef.current.classList += " clicked";
      const updatedTodos = todos.map((t) => {
        if (t.id === todo.id) {
          // checkRef.current.classList += " clicked";
          return { ...t, isDone: !todo.isDone };
        } else {
          return t;
        }
      });
      setIsCheck(true);
      setTodos(updatedTodos);
      updateTodoFun(updatedTodos);
    } else {
      checkRef.current.classList = "label";
      const updatedTodos = todos.map((t) => {
        if (t.id === todo.id) {
          // checkRef.current.classList += " clicked";
          return { ...t, isDone: !todo.isDone };
        } else {
          return t;
        }
      });
      setIsCheck(false);
      setTodos(updatedTodos);
      updateTodoFun(updatedTodos);
    }

    console.log(todos);
    console.log(checkRef.current.classList);
  };

  return (
    <li key={todo.id} className="todo__item">
      <div className="label" ref={checkRef}>
        <span className="check__box">
          <UilCheck
            className="check_icon"
            size="32"
            color="#a6a6a6"
            onClick={handleCheck}
          />
        </span>
        <span className="item__title">
          {isEditable ? (
            <input className="edit__todo" ref={inputRef} />
          ) : (
            todo.title
          )}
        </span>
      </div>
      <div className="icons__section">
        {isEditable ? (
          <UilCheckCircle
            className="check_update_icon"
            size="24"
            color="#4ca1f7"
            onClick={handleUpdate}
          />
        ) : (
          <>
            <UilTrashAlt
              className="trash_icon"
              size="24"
              color="#a6a6a6"
              onClick={handleDelete}
            />
            <UilEdit
              className="edit_icon"
              size="24"
              color="#a6a6a6"
              onClick={() => setIsEditable(true)}
            />
          </>
        )}
      </div>
    </li>
  );
};

export default Todo;
