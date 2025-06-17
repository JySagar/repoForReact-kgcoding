import styles from "./TodoItems.module.css";

import TodoItem from "./TodoItem";

const TodoItems = ({ todoItemsPassed }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItemsPassed.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
