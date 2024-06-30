import { UilPlusCircle } from "@iconscout/react-unicons";

const TodoList = () => {
  return (
    <div className="container">
      <h2>قائمة المهام</h2>
      <div className="new_todo_input">
        <input type="text" placeholder="اضف مهمة..." />
        <UilPlusCircle className="add_icon" size="32" color="#a6a6a6" />
      </div>
      <div class="newItem__select">
        <select class="filter">
          <option value="all">الكل</option>
          <option value="completed">مكتمل</option>
          <option value="unCompleted">غير مكتمل</option>
        </select>
      </div>
    </div>
  );
};

export default TodoList;
