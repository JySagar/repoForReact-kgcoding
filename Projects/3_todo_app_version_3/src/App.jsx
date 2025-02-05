import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
// import TodoItem1 from "./components/TodoItem1";
// import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  const todoItemsArray = [
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

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItemsArray}></TodoItems>
    </center>
  );
}

export default App;
