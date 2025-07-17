import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { todoItemsContext } from "../store/todoItemsStore";
import { useContext } from "react";

const TodoItems = () => {
  const contextObj = useContext(todoItemsContext);
  const todoItemsHere2 = contextObj.todoItemsFromContext;

  // Or we can write the upper two lines as a single line using object destructuring.
  // const { todoItemsHere2 } = useContext(todoItemsContext); But its not working don't know why maybe check comparing.

  return (
    <div className={styles.itemsContainer}>
      {todoItemsHere2.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          // onDeleteClick2={deleteItemHere}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
