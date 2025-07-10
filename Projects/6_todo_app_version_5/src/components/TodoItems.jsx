import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { todoItemsContext } from "../store/todoItemsStore";
import { useContext } from "react";

const TodoItems = ({ onDeleteClick }) => {
  const todoItemsPassed = useContext(todoItemsContext);
  // console.log(todoItemsPassed);

  return (
    <div className={styles.itemsContainer}>
      {todoItemsPassed.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick2={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
