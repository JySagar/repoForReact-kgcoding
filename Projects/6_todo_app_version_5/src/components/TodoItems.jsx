import styles from "./TodoItems.module.css";

import TodoItem from "./TodoItem";

const TodoItems = ({ todoItemsPassed, onDeleteClick }) => {
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
