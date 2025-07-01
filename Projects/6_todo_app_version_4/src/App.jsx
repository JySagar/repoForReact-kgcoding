import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
// import TodoItem1 from "./components/TodoItem1";
// import TodoItem2 from "./components/TodoItem2";
import "./App.css";
import { useState } from "react";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "02/02/2025",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "02/02/2025",
  //   },
  //   {
  //     name: "Complete This Course",
  //     dueDate: "28/02/2025",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  // const handleNewItem = (itemName, itemDueDate) => {
  //   // console.log(`New item added: ${itemName} and date: ${itemDueDate}`);
  //   const newTodoItems = [
  //     ...todoItems,
  //     { name: itemName, dueDate: itemDueDate },
  //   ];
  //   setTodoItems(newTodoItems);
  // };

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });
  };

  const handleDeleteItem = (todoItemName) => {
    // console.log(`Deleted item : ${todoItemName}`);
    const newTodoItems2 = todoItems.filter(
      (item) => item.name !== todoItemName
    );
    setTodoItems(newTodoItems2);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItemsPassed={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
