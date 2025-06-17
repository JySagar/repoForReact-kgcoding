import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
// import TodoItem1 from "./components/TodoItem1";
// import TodoItem2 from "./components/TodoItem2";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "02/02/2025",
    },
    {
      name: "Go to College",
      dueDate: "02/02/2025",
    },
    {
      name: "Complete This Course",
      dueDate: "28/02/2025",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} and date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems todoItemsPassed={todoItems}></TodoItems>
    </center>
  );
}

export default App;
